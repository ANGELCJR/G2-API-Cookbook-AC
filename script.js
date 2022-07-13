function recipe(ingredients) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '656357cbc3msh3aaadc8a3785d97p12888djsnef7203d31eca',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };
    
let recipeURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=';

    fetch(recipeURL + ingredients, options)
        .then(response => response.json())
        .then(data => console.log(data))
        return response;
}
    recipe();

function searchBarFunction() {
    const searchBar = document.getElementById('searchBox');
}

// adds event listener to the button for a response
searchBar.addEventListener('click', searchBarFunction);