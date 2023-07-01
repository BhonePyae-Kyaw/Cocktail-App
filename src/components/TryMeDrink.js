import React from 'react'

export default function TryMeDrink({drink, getDrinks}) {
  return (
    <div>
        {drink?.map((dr, index) => {
          return(
            <div key={index} className='tryMeParentContainer'>
              <span>Try this menu now!</span>
              <button onClick={getDrinks}>Next</button>
              <div className='tryMeDrinkContainer'>
                <div>
                  <img src={dr.strDrinkThumb} alt='drinkThumbnail' />
                </div>
                <div>
                  <p>{dr.strDrink}</p>
                  <p>Ingredients:
                    {dr.strMeasure1}  {dr.strIngredient1}, 
                    {dr.strMeasure2}  {dr.strIngredient2}, 
                    {dr.strMeasure3} {dr.strIngredient3}
                  </p>
                  <p>
                    Instructions: 
                    {dr.strInstructions}
                  </p>
                </div>
              </div>
              
            </div>
          )
        })}
      </div>
  )
}
