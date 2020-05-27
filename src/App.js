import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const APP_ID = '2dd9737b';
  const APP_KEY = '4b56d16dda6f81ca25215871f88e6f1d';
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response  = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
  }


  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}></input>
        <button className='search-btn' type='submit'>SEARCH</button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} 
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}/>
      ))}
    </div>
  )
}

export default App;
