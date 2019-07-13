import React from 'react';

const IngredientList = (props) => (
    <>

    {props.ingredients.map((ingredient, i) => <div key={i}>{ingredient.name} 🍔 <button onClick={(e,i) =>this.props.addIngredient(e,i)} > > </button>   </div>)}

    </>
)

export default IngredientList
