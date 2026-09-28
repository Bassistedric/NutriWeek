export type Activity='REST'|'CARDIO'|'STRENGTH'|'WOD';
export type MealType='BREAKFAST'|'SNACK_AM'|'LUNCH'|'SNACK_PM'|'DINNER';
export type Profile={id:string;name:string;kind:'ADULT'|'FAMILY';baseCalories:number;proteinTarget:number;activityBonus:Record<Activity,number>;heightCm?:number;weightKg?:number;targetWeightKg?:number;waistCm?:number};
export type Ingredient={name:string;amount:number;unit:'g'|'ml'|'piece';kcal:number;protein:number;scalable?:boolean};
export type Recipe={id:string;type:MealType;title:string;subtitle:string;emoji:string;minutes:number;ingredients:Ingredient[];minScale:number;maxScale:number;steps:string[];tags:string[]};
export type PlannedMeal={recipe:Recipe;scale:number;kcal:number;protein:number};
export type DayPlan={targetCalories:number;targetProtein:number;meals:PlannedMeal[];totalCalories:number;totalProtein:number};