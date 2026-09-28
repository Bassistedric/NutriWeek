import type{Profile,Recipe}from'./types';
const bonus={REST:0,CARDIO:100,STRENGTH:200,WOD:250} as const;
export const profiles:Profile[]=[
{id:'cedric',name:'Cédric',kind:'ADULT',baseCalories:2100,proteinTarget:165,activityBonus:bonus},
{id:'madame',name:'Madame',kind:'ADULT',baseCalories:1450,proteinTarget:105,activityBonus:{REST:0,CARDIO:80,STRENGTH:120,WOD:160}},
{id:'family',name:'Famille',kind:'FAMILY',baseCalories:0,proteinTarget:0,activityBonus:{REST:0,CARDIO:0,STRENGTH:0,WOD:0}}
];
export const recipes:Recipe[]=[
{id:'eggs',type:'BREAKFAST',title:'Œufs, jambon & tartine',subtitle:'Tomates à l’ail · pain complet',emoji:'🍳',minutes:10,minScale:.75,maxScale:1.45,ingredients:[{name:'Œufs',amount:2,unit:'piece',kcal:144,protein:13,scalable:false},{name:'Jambon',amount:60,unit:'g',kcal:70,protein:12},{name:'Pain complet',amount:60,unit:'g',kcal:150,protein:6},{name:'Tomates',amount:150,unit:'g',kcal:27,protein:1},{name:"Huile d'olive",amount:5,unit:'g',kcal:45,protein:0}]},
{id:'bowl',type:'LUNCH',title:'Bowl poulet méditerranéen',subtitle:'Poulet rôti · quinoa · légumes',emoji:'🥗',minutes:12,minScale:.65,maxScale:1.4,ingredients:[{name:'Poulet',amount:150,unit:'g',kcal:248,protein:46},{name:'Quinoa cuit',amount:170,unit:'g',kcal:204,protein:7},{name:'Légumes',amount:250,unit:'g',kcal:90,protein:4},{name:'Sauce yaourt',amount:60,unit:'g',kcal:55,protein:4}]},
{id:'shake',type:'SNACK',title:'Shake chocolat-banane',subtitle:'Whey · banane · lait · glaçons',emoji:'🥤',minutes:3,minScale:.65,maxScale:1.35,ingredients:[{name:'Whey',amount:30,unit:'g',kcal:115,protein:23,scalable:false},{name:'Banane',amount:100,unit:'g',kcal:89,protein:1},{name:'Lait demi-écrémé',amount:150,unit:'ml',kcal:69,protein:5}]},
{id:'curry',type:'DINNER',title:'Poulet curry coco & riz',subtitle:'Dîner commun · chacun sa portion',emoji:'🍛',minutes:25,minScale:.55,maxScale:1.4,ingredients:[{name:'Poulet',amount:170,unit:'g',kcal:281,protein:52},{name:'Riz cuit',amount:220,unit:'g',kcal:286,protein:6},{name:'Légumes',amount:220,unit:'g',kcal:80,protein:4},{name:'Lait de coco léger',amount:100,unit:'ml',kcal:110,protein:1}]}
];