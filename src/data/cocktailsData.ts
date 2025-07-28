export interface CocktailData {
  name: string;
  category: 'COCKTAILS' | 'MOCKTAILS' | 'SHOTS';
  ingredients: string[];
  description?: string;
  image: string;
}

export const cocktailsData: CocktailData[] = [
  // COCKTAILS
  {
    name: "APEROL SPRITZ",
    category: "COCKTAILS",
    ingredients: ["Aperol", "Prosecco", "Apă minerală", "Felie de portocală"],
    description: "Aperitiv italian clasic cu un echilibru perfect între amar și dulce",
    image: "aperol.png"
  },
  {
    name: "CANDY LADY",
    category: "COCKTAILS",
    ingredients: ["Vodcă", "Lichior de piersici", "Suc de afine", "Suc de lămâie", "Zahăr pe margine"],
    description: "Cocktail dulce și fructat cu un final de bomboane",
    image: "candy_lady.png"
  },
  {
    name: "ANGEL'S KISS",
    category: "COCKTAILS",
    ingredients: ["Prosecco", "Piure de piersici", "Lichior de piersici", "Piersică proaspătă"],
    description: "Cocktail italian elegant cu spumă și arome de piersici proaspete",
    image: "bellini.png"
  },
  {
    name: "BLUE DREAM",
    category: "COCKTAILS",
    ingredients: ["Rom alb", "Blue curaçao", "Cremă de nucă de cocos", "Suc de ananas", "Lămâie"],
    description: "Cocktail tropical albastru care te transportă pe plajele din Havana",
    image: "Havana.png"
  },
  {
    name: "PORNSTAR MARTINI",
    category: "COCKTAILS",
    ingredients: ["Vodcă cu vanilie", "Lichior de fructul pasiunii", "Piure de fructul pasiunii", "Suc de lămâie", "Shot de Prosecco"],
    description: "Cocktail luxos cu note exotice de fructul pasiunii și vanilie",
    image: "pornstar.png"
  },

  // MOCKTAILS
  {
    name: "WILD PASSION (Căpșună + Ananas)",
    category: "MOCKTAILS",
    ingredients: ["Căpșuni proaspete", "Suc de ananas", "Suc de lămâie", "Mentă", "Apă minerală"],
    description: "Amestec răcoritor fără alcool de căpșuni și ananas",
    image: "wild_passion.png"
  },
  {
    name: "LEMOGLOW (Lemongrass + Maracuia)",
    category: "MOCKTAILS",
    ingredients: ["Sirop de lemongrass", "Piure de fructul pasiunii", "Suc de lămâie", "Apă carbogazoasă"],
    description: "Mocktail exotic cu lemongrass aromat și fructul pasiunii tropical",
    image: "lemoglow.png"
  },
  {
    name: "PINK GRAPEFRUIT (Zmeură + Grapefruit)",
    category: "MOCKTAILS",
    ingredients: ["Zmeură proaspătă", "Suc de grapefruit roz", "Suc de lămâie", "Miere", "Mentă"],
    description: "Combinație acidulată și răcoritoare de zmeură și grapefruit",
    image: "pink_grapefruti.png"
  },
  {
    name: "EXOTIC LYCHEE (Lychee + Maracuia)",
    category: "MOCKTAILS",
    ingredients: ["Suc de lychee", "Piure de fructul pasiunii", "Suc de lămâie", "Apă de nucă de cocos"],
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
