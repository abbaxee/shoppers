const posts = [
    {
      "name" : "Tank Top",
      "price": 100,
      "category": "Men",
      "isFeatured": true,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Lunch #hamont",
      "id": "1161022966406956503",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "corater",
      "price": 150,
      "category": "Women",
      "isFeatured": true,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Snow! ⛄️🌨❄️ #lifewithsnickers",
      "id": "1160844458347054781",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "swed",
      "price": 30,
      "category": "Children",
      "isFeatured": true,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Cleaned my office and mounted my recording gear overhead. Stoked for 2016!",
      "id": "1154606670337393752",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Some Top",
      "price": 40,
      "category": "Women",
      "isFeatured": true,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Making baby pancakes for one early rising baby. ☕️🍴",
      "id": "1157179863266871229",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank sum",
      "category": "Men",
      "price": 55,
      "isFeatured": true,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "New Stickers just came in. I'll do another mailing in a few weeks if you want some. #javascript",
      "id": "1126293663140399053",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank Top",
      "price": 59,
      "category": "Men",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Tacos for breakfast. I love you Austin. 🇺🇸",
      "id": "1117418173361145365",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    { 
      "name" : "Tank Top",
      "price": 54,
      "category": "Women",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Tried poke for the first time at @pokehbar. Delicious! It's like a bowl of sushi",
      "id": "1162418651480049646",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank Top",
      "price": 51,
      "category": "Children",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Brunchin'",
      "id": "1152964002473690553",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank Top",
      "price": 60,
      "category": "Women",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "2015 can be summed up with one baby and a many lines of category. Ans a coding baby. 👶🏼⌨",
      "id": "1150824171912152320",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank Top",
      "price": 66,
      "category": "Men",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Lekker Chocoladeletter",
      "id": "1149382879529256679",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank Top",
      "price": 57,
      "category": "Women",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Just discovered the #hamont farmers market has a new ramen place! 🍜",
      "id": "1147180903383025596",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank Top",
      "price": 61,
      "category": "Children",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "⛄️",
      "id": "1143535906423162226",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank Top",
      "price": 70,
      "category": "Men",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "6 page spread on flexbox in this months netmag!",
      "id": "1141561999742846119",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank Top",
      "price": 19,
      "category": "Men",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Hanging out in my office waiting for 5:00 beers to come around.",
      "id": "1137894817632733056",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank Top",
      "price": 20,
      "category": "Women",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Today I learned that a long pull espresso is called a 'lungo'",
      "id": "1136932306813044281",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank Top",
      "price": 10,
      "category": "Women",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Awesome hand lettered gift from @eunibae and the HackerYou crew.",
      "id": "1136502965197194931",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank Top",
      "price": 40,
      "category": "Children",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Some serious hardware meet JavaScript hacks going down this week at hackeryou. Excited for demo day!",
      "id": "1135147611821557699",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    },
    {
      "name" : "Tank Top",
      "price": 45,
      "category": "Men",
      "isFeatured": false,
      "quantity": {
        "small": 10,
        "medium": 4,
        "large": 5
      },
      "description": "Some major audio upgrades coming to my next videos 😍",
      "id": "1132002270913873708",
      "display_src": `https://picsum.photos/400/400/?image=${Math.floor((Math.random() * 85))}`,
    }    
  ];
  
  
  export default posts;
  