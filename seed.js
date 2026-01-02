const mongoose = require('mongoose')
const { Schema } = mongoose

// mongoose setup
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/recipeApp')
    console.log('Mongoose connected')
}

main().catch((error) => {
    console.log(error)
})

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    totalTime: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,

    },
    steps: {
        type: [String],
        required: true,
    }
})

// Model
const Recipe = mongoose.model('Recipe', recipeSchema)

const dummyRecipes = [
    {
        title: "Creamy Garlic Butter Chicken",
        description: "Tender chicken breasts cooked in a rich, creamy garlic butter sauce with parmesan. Perfect with mashed potatoes or pasta.",
        ingredients: [
            "4 boneless chicken breasts",
            "2 tbsp olive oil",
            "3 cloves garlic, minced",
            "1 cup heavy cream",
            "1/2 cup chicken broth",
            "1/2 cup parmesan cheese, grated",
            "1/2 cup sun-dried tomatoes",
            "2 cups fresh spinach",
            "1 tsp Italian seasoning",
            "Salt & pepper to taste"
        ],
        author: "Maria Rossi",
        totalTime: "35 mins",
        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
        ,
        steps: [
            "Preheat oven to 350°F (175°C). Grease 9-inch springform pan.",
            "Mix graham crumbs and melted butter. Press into pan bottom. Bake 10 minutes, cool.",
            "Beat cream cheese and sugar until smooth. Add eggs one at a time.",
            "Mix in sour cream, vanilla, and lemon zest. Pour over crust.",
            "Bake in water bath 60-70 minutes until center jiggles slightly.",
            "Cool 15 minutes, then run knife around edge. Chill 4+ hours.",
            "Mix topping ingredients, spread on chilled cheesecake. Chill 1 more hour before slicing."
        ]
    },
    {
        title: "Thai Green Curry with Chicken",
        description: "Authentic Thai green curry with juicy chicken, eggplant, bamboo shoots, and fragrant herbs in creamy coconut milk.",
        ingredients: [
            "8 oz lo mein noodles or spaghetti",
            "2 tbsp vegetable oil",
            "1 red bell pepper, sliced",
            "1 carrot, julienned",
            "1 cup broccoli florets",
            "1 cup snap peas",
            "3 green onions, sliced",
            "3 cloves garlic, minced",
            "1/4 cup soy sauce",
            "2 tbsp oyster sauce",
            "1 tbsp sesame oil",
            "1 tsp brown sugar"
        ],
        author: "Somchai Kittipong",
        totalTime: "40 mins",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
        steps: [
            "Preheat oven to 425°F (220°C). Line a sheet pan with parchment.",
            "Toss potatoes with 2 tbsp oil, salt, and pepper. Spread on pan and roast 15 minutes.",
            "Whisk remaining oil, garlic, lemon juice/zest, mustard, dill, salt, and pepper.",
            "Remove pan, push potatoes to sides. Add salmon skin-side down in center, asparagus around edges.",
            "Brush salmon and veggies with lemon-garlic mixture.",
            "Roast 12-15 minutes until salmon flakes easily.",
            "Serve with lemon wedges and extra dill."
        ]
    },
    {
        title: "Classic Homemade Beef Lasagna",
        description: "Layers of rich meat sauce, creamy béchamel, mozzarella, and parmesan with perfectly al dente pasta sheets.",
        ingredients: [
            "6 large bell peppers (any color)",
            "1 lb ground beef",
            "1 cup cooked rice",
            "1 small onion, diced",
            "2 cloves garlic, minced",
            "1 can (15 oz) tomato sauce",
            "1 tsp Italian seasoning",
            "1.5 cups shredded cheddar or mozzarella",
            "Salt & black pepper to taste"
        ],
        author: "Giovanni Bianchi",
        totalTime: "1 hour 20 mins",
        image:
            "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D"

        ,
        steps: [
            "Press tofu to remove excess water, then pan-fry until golden. Set aside.",
            "In same pan, add 1/4 cup coconut milk and curry paste. Cook 2 minutes until fragrant.",
            "Pour in remaining coconut milk and sugar. Bring to simmer.",
            "Add bell pepper, zucchini, and broccoli. Cook 5 minutes.",
            "Add snap peas, tofu, and soy sauce. Simmer 3 more minutes.",
            "Turn off heat, stir in lime juice.",
            "Serve over jasmine rice, garnished with basil and sliced chili."
        ]
    },
    {
        title: "Quick & Easy Vegetable Stir-Fry",
        description: "Colorful mix of broccoli, bell peppers, carrots, snap peas and mushrooms in a savory garlic-ginger soy sauce.",
        ingredients: [
            "8 oz lo mein noodles or spaghetti",
            "2 tbsp vegetable oil",
            "1 red bell pepper, sliced",
            "1 carrot, julienned",
            "1 cup broccoli florets",
            "1 cup snap peas",
            "3 green onions, sliced",
            "3 cloves garlic, minced",
            "1/4 cup soy sauce",
            "2 tbsp oyster sauce",
            "1 tbsp sesame oil",
            "1 tsp brown sugar"
        ],
        author: "Alex Chen",
        totalTime: "20 mins",
        image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D",
        steps: [
            "In a bowl, whisk egg yolks, milk, and vanilla.",
            "Sift in flour and baking powder. Mix until smooth.",
            "In another bowl, beat egg whites with sugar to stiff peaks (use electric mixer).",
            "Gently fold egg whites into yolk mixture in 3 additions until just combined (don't overmix).",
            "Heat a non-stick pan over low heat, add butter. Scoop 2-3 tbsp batter per pancake, stacking 3 scoops high.",
            "Add 1-2 tbsp water around pancakes, cover, and cook 4 minutes.",
            "Flip carefully, add more water, cover, and cook another 4 minutes until golden.",
            "Serve immediately with powdered sugar, syrup, and berries."
        ]

    },
    {
        title: "Fluffy Japanese Soufflé Pancakes",
        description: "Super tall, jiggly, and cloud-like pancakes that melt in your mouth. A weekend breakfast favorite!",
        ingredients: [
            "8 oz lo mein noodles or spaghetti",
            "2 tbsp vegetable oil",
            "1 red bell pepper, sliced",
            "1 carrot, julienned",
            "1 cup broccoli florets",
            "1 cup snap peas",
            "3 green onions, sliced",
            "3 cloves garlic, minced",
            "1/4 cup soy sauce",
            "2 tbsp oyster sauce",
            "1 tbsp sesame oil",
            "1 tsp brown sugar"
        ],
        author: "Yuki Tanaka",
        totalTime: "30 mins",
        image:
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
        ,
        steps: [
            "Marinate chicken with 1/2 tsp each cumin, garam masala, turmeric, chili powder, salt, and 1 tbsp yogurt (if available) for 15 minutes.",
            "Heat butter in a large pan over medium heat. Add onion and cook until golden (8 minutes).",
            "Add ginger-garlic paste and cook 2 minutes until fragrant.",
            "Stir in remaining spices and tomato puree. Cook 5-7 minutes until oil separates.",
            "Add chicken pieces and cook 5 minutes until browned.",
            "Pour in 1/2 cup water, cover, and simmer 10-12 minutes until chicken is cooked.",
            "Stir in heavy cream and simmer 3 more minutes. Adjust salt.",
            "Garnish with cilantro and serve hot with rice or naan."
        ]
    },
    {
        title: "Spicy Honey Lime Grilled Salmon",
        description: "Perfectly grilled salmon fillets with a sweet-spicy honey-lime glaze and fresh cilantro.",
        ingredients: [
            "8 oz lo mein noodles or spaghetti",
            "2 tbsp vegetable oil",
            "1 red bell pepper, sliced",
            "1 carrot, julienned",
            "1 cup broccoli florets",
            "1 cup snap peas",
            "3 green onions, sliced",
            "3 cloves garlic, minced",
            "1/4 cup soy sauce",
            "2 tbsp oyster sauce",
            "1 tbsp sesame oil",
            "1 tsp brown sugar"
        ],
        author: "Carlos Rivera",
        totalTime: "25 mins",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D",
        steps: [
            "Warm broth in a saucepan and keep at a simmer.",
            "In a large pan, heat olive oil and 2 tbsp butter over medium heat. Add onion and garlic, sauté until translucent (5 minutes).",
            "Add mushrooms and cook until they release liquid and brown (8-10 minutes). Season with salt and pepper.",
            "Stir in rice and toast for 2 minutes until edges are translucent.",
            "Add white wine and stir until absorbed.",
            "Add warm broth 1 cup at a time, stirring frequently until absorbed before adding more. Repeat for 18-20 minutes until rice is creamy and al dente.",
            "Remove from heat, stir in remaining butter and Parmesan. Let rest 2 minutes.",
            "Serve garnished with parsley and extra cheese."
        ]
    },
    {
        title: "Middle Eastern Shakshuka",
        description: "Poached eggs in a smoky, spiced tomato and pepper sauce, finished with feta and fresh herbs.",
        ingredients: [
            "8 oz lo mein noodles or spaghetti",
            "2 tbsp vegetable oil",
            "1 red bell pepper, sliced",
            "1 carrot, julienned",
            "1 cup broccoli florets",
            "1 cup snap peas",
            "3 green onions, sliced",
            "3 cloves garlic, minced",
            "1/4 cup soy sauce",
            "2 tbsp oyster sauce",
            "1 tbsp sesame oil",
            "1 tsp brown sugar"
        ],
        author: "Layla Hassan",
        totalTime: "30 mins",
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
        steps: [
            "Bring a large pot of heavily salted water to a boil.",
            "Cook spaghetti according to package instructions until al dente.",
            "While pasta cooks, heat a large skillet over medium heat and add pancetta/guanciale. Cook until crispy (about 8-10 minutes).",
            "In a bowl, whisk together eggs, both cheeses, and a generous amount of black pepper.",
            "Reserve 1 cup of pasta water, then drain spaghetti.",
            "Remove skillet from heat, add drained pasta and toss quickly.",
            "Pour egg-cheese mixture over pasta and toss vigorously, adding reserved pasta water a little at a time until creamy sauce forms.",
            "Serve immediately with extra cheese and black pepper on top."
        ]
    },
    {
        title: "Middle Eastern Shakshuka",
        description: "Poached eggs in a smoky, spiced tomato and pepper sauce, finished with feta and fresh herbs.",
        ingredients: [
            "8 oz lo mein noodles or spaghetti",
            "2 tbsp vegetable oil",
            "1 red bell pepper, sliced",
            "1 carrot, julienned",
            "1 cup broccoli florets",
            "1 cup snap peas",
            "3 green onions, sliced",
            "3 cloves garlic, minced",
            "1/4 cup soy sauce",
            "2 tbsp oyster sauce",
            "1 tbsp sesame oil",
            "1 tsp brown sugar"
        ],
        author: "Layla Hassan",
        totalTime: "30 mins",
        image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D",
        steps: [
            "In a small bowl, mix soy sauce, oyster sauce, honey, and sesame oil. Set aside.",
            "Heat 1 tbsp oil in a large wok or skillet over high heat.",
            "Add chicken slices and stir-fry until just cooked through (4-5 minutes). Remove and set aside.",
            "Add remaining oil, then toss in garlic and stir for 30 seconds.",
            "Add all vegetables and stir-fry for 3-4 minutes until crisp-tender.",
            "Return chicken to the pan, pour in sauce, and toss everything together for 1-2 minutes.",
            "Serve hot over steamed rice."
        ]
    },
    {
        title: "Middle Eastern Shakshuka",
        description: "Poached eggs in a smoky, spiced tomato and pepper sauce, finished with feta and fresh herbs.",
        ingredients: [
            "8 oz lo mein noodles or spaghetti",
            "2 tbsp vegetable oil",
            "1 red bell pepper, sliced",
            "1 carrot, julienned",
            "1 cup broccoli florets",
            "1 cup snap peas",
            "3 green onions, sliced",
            "3 cloves garlic, minced",
            "1/4 cup soy sauce",
            "2 tbsp oyster sauce",
            "1 tbsp sesame oil",
            "1 tsp brown sugar"
        ],
        author: "Layla Hassan",
        totalTime: "30 mins",
        image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
        steps: [
            "Line a 9x13 inch pan with parchment paper.",
            "Mix graham cracker crumbs, melted butter, peanut butter, and powdered sugar until well combined.",
            "Press mixture firmly into the bottom of the prepared pan.",
            "Place in refrigerator while preparing topping.",
            "In a microwave-safe bowl, melt chocolate chips with heavy cream in 30-second intervals, stirring until smooth.",
            "Pour chocolate mixture over the peanut butter layer and spread evenly.",
            "Sprinkle with flaky sea salt if desired.",
            "Refrigerate for at least 2 hours until set, then cut into bars."
        ]
    },
];

const seedRecipe = async () => {
    const deleteRecipe = await Recipe.deleteMany({})
    console.log(deleteRecipe)
    const recipe = await Recipe.insertMany(dummyRecipes)
    console.log(recipe)
}

seedRecipe()