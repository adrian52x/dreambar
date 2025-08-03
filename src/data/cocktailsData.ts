export interface CocktailData {
  name: string;
  category: 'COCKTAILS' | 'MOCKTAILS' | 'SHOTS';
  ingredients: string[];
  description?: string;
  image: string;
}

export const newCocktailsData = [
  {
    category: 'COCKTAILS',
    image: "all_cocktails.jpg",
  },
  {
    category: 'MOCKTAILS',
    image: "all_mocktails.jpg",
  },
  {
    category: 'SHOTS',
    image: "all_shots.jpg",
  }
]

export const cocktailsData: CocktailData[] = [
  // COCKTAILS
  {
    name: "APEROL SPRITZ",
    category: "COCKTAILS",
    ingredients: ["Aperol 50ml", "Prosecco 150ml", "Fresh de portocală"],
    description: "Aperitiv italian clasic cu un echilibru perfect între amar și dulce",
    image: "aperol.png"
  },
  {
    name: "CANDY LADY",
    category: "COCKTAILS",
    ingredients: ["Vodcă", "Lichior de piersici", "Suc de afine", "Suc de lămâie"],
    description: "Cocktail dulce și fructat cu un final de bomboane",
    image: "candy_lady.jpg"
  },
  {
    name: "ANGEL'S KISS",
    category: "COCKTAILS",
    ingredients: ["Prosecco 80ml", "Fresh de piersici 80ml"],
    description: "Cocktail italian elegant cu spumă și arome de piersici proaspete",
    image: "bellini.png"
  },
  {
    name: "BLUE DREAM",
    category: "COCKTAILS",
    ingredients: ["Vodcă 50ml", "Lichior Blue curaçao 20ml", "Sprite 150ml", "Ananas 35g"],
    description: "Cocktail tropical albastru care te transportă pe plajele din Havana",
    image: "blue_dream.png"
  },
  {
    name: "PORNSTAR MARTINI",
    category: "COCKTAILS",
    ingredients: ["Vodcă 40ml", "Lichior de fructul pasiunii 20ml", "Piure de fructul pasiunii 30ml", "Fresh de lămâie 20ml", "Sirop de vanilie 10ml"],
    description: "Cocktail luxos cu note exotice de fructul pasiunii și vanilie",
    image: "pornstar.png"
  },

  // MOCKTAILS
  {
    name: "WILD PASSION (Căpșună + Ananas)",
    category: "MOCKTAILS",
    ingredients: ["Căpșuni proaspete", "Suc de ananas", "Suc de lămâie"],
    description: "Amestec răcoritor fără alcool de căpșuni și ananas",
    image: "wild_passion.png"
  },
  {
    name: "LEMOGLOW (Lemongrass + Maracuia)",
    category: "MOCKTAILS",
    ingredients: ["Sirop de lemongrass", "Piure de fructul pasiunii", "Suc de lămâie"],
    description: "Mocktail exotic cu lemongrass aromat și fructul pasiunii tropical",
    image: "lemoglow.png"
  },
  {
    name: "PINK GRAPEFRUIT (Zmeură + Grapefruit)",
    category: "MOCKTAILS",
    ingredients: ["Zmeură proaspătă", "Suc de grapefruit roz", "Suc de lămâie"],
    description: "Combinație acidulată și răcoritoare de zmeură și grapefruit",
    image: "pink_grapefruti.png"
  },
  {
    name: "EXOTIC LYCHEE (Lychee + Maracuia)",
    category: "MOCKTAILS",
    ingredients: ["Suc de lychee", "Piure de fructul pasiunii", "Suc de lămâie"],
    description: "Paradis tropical într-un pahar cu lychee dulce și fructul pasiunii",
    image: "exotic_lychee.png"
  },

  // SHOTS
  {
    name: "B-52",
    category: "SHOTS",
    ingredients: ["Kahlúa", "Bailey's Irish Cream", "Grand Marnier"],
    description: "Shot clasic stratificat care seamănă cu un avion bombardier",
    image: "b52_gpt.png"
  },
  {
    name: "HIROSHIMA",
    category: "SHOTS",
    ingredients: ["Vodcă", "Bailey's Irish Cream", "Grenadină", "Sambuca"],
    description: "Shot stratificat exploziv cu prezentare dramatică",
    image: "hiroshima_gpt.png"
  },
  {
    name: "GREEN MEXICAN",
    category: "SHOTS",
    ingredients: ["Tequila", "Lichior de pepene Midori", "Suc de lămâie", "Sare pe margine"],
    description: "Shot verde vibrant cu arome de tequila și pepene",
    image: "mexican_gpt.png"
  },
  {
    name: "DREAM SHOT",
    category: "SHOTS",
    ingredients: ["Tequila", "Suc de portocale", "Grenadină", "Roată de lămâie"],
    description: "Versiunea mini a clasicului Tequila Sunrise în formă de shot",
    image: "sunrise_gpt.png"
  },
  {
    name: "BLUE KAMIKAZE",
    category: "SHOTS",
    ingredients: ["Vodcă", "Blue curaçao", "Suc de lămâie", "Triple sec"],
    description: "Shot albastru îndrăzneț cu un gust citric",
    image: "kamikaze.png"
  }
];
