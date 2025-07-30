// script.js

// 2.1 DOM-Elemente für den Rezept-Generator abrufen
// Wir speichern Referenzen auf unsere HTML-Elemente in JavaScript-Variablen.
// document.getElementById('ID') gibt das Element mit der angegebenen ID zurück.
const generateRecipeBtn = document.getElementById("generateRecipeBtn"); // Der "Rezept generieren" Button
const recipeList = document.getElementById("recipeList"); // Die <ul>-Liste für die Zutaten
const recipeTitle = document.getElementById("recipeTitle"); // Der <h3>-Titel für den Rezeptnamen
const messageDiv = document.getElementById("message"); // Das <div> für Statusmeldungen

console.log("DOM-Elemente erfolgreich abgerufen.");

const recipes = [
  {
    name: "Sommerlicher Salat",
    ingredients: [
      "200g gemischter Salat",
      "100g Kirschtomaten",
      "1 Gurke",
      "50g Feta-Käse",
      "2 EL Olivenöl",
      "1 EL Balsamico-Essig",
      "Salz, Pfeffer"
    ]
  },
  {
    name: "Pasta Pesto",
    ingredients: [
      "250g Spaghetti",
      "100g Basilikumpesto",
      "50g Parmesan",
      "Knoblauchzehe",
      "Pinienkerne",
      "Olivenöl"
    ]
  },
  {
    name: "Gemüse-Curry",
    ingredients: [
      "1 Zwiebel",
      "2 Karotten",
      "1 Zucchini",
      "200g Kichererbsen",
      "400ml Kokosmilch",
      "2 EL Currypulver",
      "Reis als Beilage"
    ]
  },
  {
    name: "Schoko-Muffins",
    ingredients: [
      "150g Mehl",
      "100g Zucker",
      "2 EL Kakao",
      "1 TL Backpulver",
      "1 Prise Salz",
      "1 Ei",
      "100ml Milch",
      "50g geschmolzene Butter",
      "50g Schokostückchen"
    ]
  },
  {
    name: "Frucht-Smoothie",
    ingredients: [
      "1 Banane",
      "100g Beeren (gefroren)",
      "150ml Mandelmilch",
      "1 EL Chiasamen",
      "Optional: Honig zum Süßen"
    ]
  }
];
console.log("Rezeptdaten geladen. Anzahl der Rezepte:", recipes.length);

let lastIndex = -1;

function generateRandomRecipe() {
console.log("'Generate random Recipe' function has started.");
// pick random number with math floor + math random * length of recipes
let randomIndex = Math.floor(Math.random() * recipes.length);

// if random index is the same as the last one, generate a new one, log as new attempt
while (randomIndex === lastIndex) {
    console.log("Same index as last time, renegerating...");
    randomIndex = Math.floor(Math.random() * recipes.length);
    console.log("New attempt: ", randomIndex);
}
// show final picked index and add it as lastIndex
console.log("Final picked index: ", randomIndex);
lastIndex = randomIndex;

// add selected recipe from the array "recipes", with "lastIndex" index
const selectedRecipe = recipes[lastIndex];
console.log("Zufälliges Rezept ausgewählt: ", selectedRecipe.name);

// make the recipe List empty so it can be filled up
recipeList.innerHTML = '';
recipeTitle.textContent = `Zutaten für ${selectedRecipe.name}`; // change the insides (txt content) of the recipeTitle

// write a void function forEach ingredient - generate a new list Entry, create a "li" for it, add the ingredient text to txt content
selectedRecipe.ingredients.forEach(ingredient => {
    const listEntry = document.createElement("li");
    listEntry.textContent = ingredient;
    // if it includes these words, add a class highlight from CSS
    if (ingredient.toLowerCase().includes("parmesan") ||
        ingredient.toLowerCase().includes("milch") || 
        ingredient.toLowerCase().includes("ei") || 
        ingredient.toLowerCase().includes("gurke")) {
        // add a class highlight to classList, log to console
        listEntry.classList.add("highlight-ingredient");
        console.log(`Ingredient highlighted: ${ingredient}`);
        }
    // append the ingredient to recipeList
    recipeList.appendChild(listEntry);
    });

    // if the messageDiv is NOT empty, or just exists, then change the inner HTML
    if (messageDiv) {
        messageDiv.innerHTML = `<p>Neues Rezept: <strong>${selectedRecipe.name} </strong> generiert.</p>`;
        messageDiv.style.backgroundColor = "#6292a8ff";
        messageDiv.style.color = "#feffffff";
        messageDiv.style.borderColor = "#ff67d9ff";
        console.log(`Rezept ${selectedRecipe.name} generiert.`);
    };
    
};

generateRandomRecipe()
generateRecipeBtn.addEventListener("click", generateRandomRecipe)