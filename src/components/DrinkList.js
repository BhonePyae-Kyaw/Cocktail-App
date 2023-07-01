import React from 'react'

export default function DrinkList({drinkList}) {
  return (
    <div className='drinkListContainer'>
        {drinkList?.map((dl, index) => {
          return(
            <div key={index}>
              <h3>{dl.strDrink}</h3>
              <img src={dl.strDrinkThumb} alt='drinkList' className='drinkListImg' />
            </div>
          )
        })}
      </div>
  )
}
