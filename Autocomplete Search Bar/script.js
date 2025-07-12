const searchBar = document.getElementById("search-bar");
const suggestions = document.getElementById("suggestions");

let searchText = "";
let timeout = true;

const removeSuggestions = () => {
    while (suggestions.firstChild) {
      suggestions.removeChild(suggestions.firstChild);
    }
}

const searchRecipe = async () => {
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${searchText}`);
    const items = await data.json();
    const recipes = items.recipes;

    for(let i = 0; i < 9 && i < recipes.length && suggestions.childNodes.length < 10; ++i) {
        const item = document.createElement('span');
        item.innerText = recipes[i].name;
        
        suggestions.appendChild(item);
        item.addEventListener('click', () => {
            searchBar.value = item.innerText;
            searchText = item.innerText;
            removeSuggestions();
        });
    }
}

const findRecipe = () => {
    removeSuggestions();

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (searchText.length !== 0) searchRecipe();
    }, 300);
}

searchBar.addEventListener('input', (e) => {
    searchText = e.target.value;

    findRecipe();
});

searchBar.addEventListener('focus', () => {
    findRecipe();
});

window.addEventListener('click', (e) => {
    if(e.target.nodeName !== 'span') removeSuggestions();
})

window.addEventListener('beforeunload', () => clearTimeout(timeout));