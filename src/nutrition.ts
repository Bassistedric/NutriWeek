import type{Activity,DayPlan,PlannedMeal,Profile,Recipe}from'./types';
const macros=(r:Recipe,scale:number)=>r.ingredients.reduce((a,i)=>{const s=i.scalable===false?1:scale;return{kcal:a.kcal+i.kcal*s,protein:a.protein+i.protein*s}}, {kcal:0,protein:0});
const planned=(r:Recipe,scale:number):PlannedMeal=>{const m=macros(r,scale);return{recipe:r,scale,kcal:Math.round(m.kcal),protein:Math.round(m.protein)}};
const clamp=(n:number,min:number,max:number)=>Math.max(min,Math.min(max,n));
export function buildDayPlan(profile:Profile,activity:Activity,recipes:Recipe[]):DayPlan{
 const targetCalories=profile.baseCalories+profile.activityBonus[activity],targetProtein=profile.proteinTarget;
 if(profile.kind==='FAMILY')return{targetCalories:0,targetProtein:0,meals:recipes.map(r=>planned(r,1)),totalCalories:0,totalProtein:0};
 const dinner=recipes.find(r=>r.type==='DINNER')!;const other=recipes.filter(r=>r.type!=='DINNER');
 const dinnerShare=activity==='WOD'||activity==='STRENGTH'?.34:.36;
 const dinnerBase=macros(dinner,1).kcal;const dinnerScale=clamp(targetCalories*dinnerShare/dinnerBase,dinner.minScale,dinner.maxScale);
 const d=planned(dinner,dinnerScale);const remaining=Math.max(0,targetCalories-d.kcal);
 const weights={BREAKFAST:.29,LUNCH:.43,SNACK:.28,DINNER:0};
 const rest=other.map(r=>{const base=macros(r,1).kcal;return planned(r,clamp(remaining*weights[r.type]/base,r.minScale,r.maxScale))});
 const meals=[...rest,d];const totalCalories=meals.reduce((s,m)=>s+m.kcal,0),totalProtein=meals.reduce((s,m)=>s+m.protein,0);
 return{targetCalories,targetProtein,meals,totalCalories,totalProtein};
}
export function ingredientAmount(amount:number,scale:number,scalable=true){return scalable?amount*scale:amount}