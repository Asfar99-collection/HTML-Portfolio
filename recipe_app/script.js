const searchbutton = document.getElementById('searchButton');
const searchbox = document.getElementById('searchInput');
const recipeContainer = document.getElementById('recipeContainer');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const RecipeCloseButton = document.querySelector('.recipe-close-button');




const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h2>fetching Recipes.....</h2>";
    try{
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    recipeContainer.innerHTML = "";

    
    response.meals.forEach(meal => {
        // console.log(meal);

        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipeDiv');

        recipeDiv.innerHTML = `
    <img src ="${meal.strMealThumb}">
    <h3>${meal.strMeal}</h3>
    <p><span>${meal.strArea}</span> Dish</p>
    <p>Belongs to <span>${meal.strCategory}</span> category</p>

    `
    const button = document.createElement('button');
    button.textContent ="view Recipe";
    recipeDiv.appendChild(button);

    button.addEventListener('click' ,()=>{
        openRecipePop(meal);
    })

        recipeContainer.appendChild(recipeDiv);
    });

    }
    catch (error) {
        recipeContainer.innerHTML = "<h2>Error fetching recipes</h2>";
    }


}

window.onload = function() {
  fetchRecipes('');
};

const fetchIngredients =(meal) =>{
    // console.log(meal);
    let ingredientList ="";
    for(let i=1 ;i<=20;i++){
        const Ingredients =meal[`strIngredient${i}`];
        if(Ingredients)
        {
            const measure = meal[`strMeasure${i}`];
            ingredientList += `<li>${measure} ${Ingredients}</li>`

        }
        else
        {
            break;
        }


    }
    return ingredientList;
    
}

const openRecipePop = (meal) =>{
    recipeDetailsContent.innerHTML = `
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="recipe-popup-img">
    <h2 class= "recipeName"> ${meal.strMeal}</h2>
    <h3>Ingredients:</h3>
    <ul class="ingredients-list">${fetchIngredients(meal)}</ul>
     <div class = "instructions">
    <h3>Instructions:</h3>
    <p >${meal.strInstructions}</p>
    </div>

    `
    
    

    recipeDetailsContent.parentElement.style.display ="block" ;

}

RecipeCloseButton.addEventListener('click' , ()=>{
    recipeDetailsContent.parentElement.style.display ="none";
})

searchbutton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchbox.value.trim();
    /*    console.log("button clicked") */
    fetchRecipes(searchInput);

});
