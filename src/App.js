import './App.css';
import axios from 'axios'
import {useEffect, useState } from 'react';
import TryMeDrink from './components/TryMeDrink';
import DrinkList from './components/DrinkList';
import AlphabetSearch from './components/AlphabetSearch';
import Pagination from './components/Pagination';

function App() {
  const [drink, setdrink] = useState();
  const [drinkList, setDrinkList] = useState();
  const [params, setParams] = useState('a')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  

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
      console.log(response.data.drinks)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  useEffect(() => {
    getDrinksByName();
    setCurrentPage(1)
  }, [params])
  
  useEffect(() => {
    getDrinks();
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = drinkList?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Welcome to the Cocktail Master!</h1>
      <TryMeDrink drink={drink} getDrinks ={getDrinks} />
      <AlphabetSearch setParams={setParams} />
      <DrinkList drinkList={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={drinkList?.length}
        paginate={paginate}
      />

      
    </div>
  );
}
export default App; 
