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
        type: [String],

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
        image: [
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
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
        image: ["https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D"]
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
        image: [
            "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D"
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
        image: ["https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D"]
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
        image: [
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
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
        image: ["https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D"]
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
        image: ["https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D"]
    }
];

const seedRecipe = async () => {
    const deleteRecipe = await Recipe.deleteMany({})
    console.log(deleteRecipe)
    const recipe = await Recipe.insertMany(dummyRecipes)
    console.log(recipe)
}

seedRecipe()