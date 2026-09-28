import type{Activity,DayPlan,MealType,PlannedMeal,Profile,Recipe}from'./types';
const macros=(r:Recipe,scale:number)=>r.ingredients.reduce((a,i)=>{const s=i.scalable===false?1:scale;return{kcal:a.kcal+i.kcal*s,protein:a.protein+i.protein*s}}, {kcal:0,protein:0});
const planned=(r:Recipe,scale:number):PlannedMeal=>{const m=macros(r,scale);return{recipe:r,scale,kcal:Math.round(m.kcal),protein:Math.round(m.protein)}};
const clamp=(n:number,min:number,max:number)=>Math.max(min,Math.min(max,n));
export function buildDayPlan(profile:Profile,activity:Activity,library:Recipe[],selection:Partial<Record<MealType,string>>={}):DayPlan{
 const targetCalories=profile.baseCalories+profile.activityBonus[activity],targetProtein=profile.proteinTarget;
 const pick=(type:MealType)=>library.find(r=>r.type===type&&r.id===selection[type])??library.find(r=>r.type===type)!;
 const chosen=(['BREAKFAST','SNACK_AM','LUNCH','SNACK_PM','DINNER']as MealType[]).map(pick);
 if(profile.kind==='FAMILY')return{targetCalories:0,targetProtein:0,meals:chosen.map(r=>planned(r,1)),totalCalories:0,totalProtein:0};
 const dinner=pick('DINNER');const other=chosen.filter(r=>r.type!=='DINNER');
 const dinnerShare=activity==='WOD'||activity==='STRENGTH'?.34:.36;
 const dinnerScale=clamp(targetCalories*dinnerShare/macros(dinner,1).kcal,dinner.minScale,dinner.maxScale);
 const d=planned(dinner,dinnerScale),remaining=Math.max(0,targetCalories-d.kcal);
 const weights=activity==='WOD'||activity==='STRENGTH'?{BREAKFAST:.25,SNACK_AM:.10,LUNCH:.37,SNACK_PM:.28,DINNER:0}:{BREAKFAST:.28,SNACK_AM:.12,LUNCH:.40,SNACK_PM:.20,DINNER:0};
 const rest=other.map(r=>planned(r,clamp(remaining*weights[r.type]/macros(r,1).kcal,r.minScale,r.maxScale)));
 const meals=[...rest,d],totalCalories=meals.reduce((s,m)=>s+m.kcal,0),totalProtein=meals.reduce((s,m)=>s+m.protein,0);
 return{targetCalories,targetProtein,meals,totalCalories,totalProtein};
}
export function ingredientAmount(amount:number,scale:number,scalable=true){return scalable?amount*scale:amount}