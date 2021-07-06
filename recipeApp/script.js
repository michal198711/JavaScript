const meals = document.getElementById("meals");

async function getRandomMeal() {
const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
const respData = await resp.json();
const randomMeal = respData.meals[0];
console.log(randomMeal);

addMeal(randomMeal, true);


};

async function getMealById(id) {
    const randomMeal = await fetchfetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'+id);

};

async function getMealsBySearch(term) {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'+term);
};

getRandomMeal()



function addMeal(mealData, random = false) {
    console.log(mealData);

    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = `
        <div class="meal-header">
            ${
                random
                    ? `
            <span class="random"> Random Recipe </span>`
                    : ""
            }
            <img
                src="${mealData.strMealThumb}"
                alt="${mealData.strMeal}"
            />
        </div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `;
meals.appendChild(meal)
}