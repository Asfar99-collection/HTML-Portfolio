const seachbutton = document.getElementById('searchButton');
const searchbox= document.getElementById('searchInput');
const recipeContainer = document.getElementById('recipeContainer');


const fetchRecipes =() =>{
const data = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
    

}

seachbutton.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput =searchbox.ariaValueMax.trim();
    console.log("button clicked")

});
