import './App.css';
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react';
import TryMeDrink from './components/TryMeDrink';
import DrinkList from './components/DrinkList';
import AlphabetSearch from './components/AlphabetSearch';

function App() {
  const [drink, setdrink] = useState();
  const [drinkList, setDrinkList] = useState();
  const [params, setParams] = useState('a')

  const getDrinks = async() => {
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      console.log(response.data.drinks);
      setdrink(response.data.drinks)
    } catch (error) {
      console.error(error);
    }
  }
  
  const getDrinksByName = () => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${params}`)
    .then( function (response) {
      setDrinkList(response.data.drinks)
      console.log(params)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  const setNewParams = (char) => {
    setParams(char);
    getDrinksByName();
  };

  useEffect(() => {
    getDrinksByName();
  }, [params])
  
  useEffect(() => {
    getDrinks();
  }, [])

  return (
    <div className="App">
      <h1>Welcome to the Cocktail Master!</h1>
      <TryMeDrink drink={drink} getDrinks ={getDrinks} />
      <AlphabetSearch setNewParams={setNewParams} />
      <DrinkList drinkList={drinkList} />
    

      
    </div>
  );
}
export default App; 
