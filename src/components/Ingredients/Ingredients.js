import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  // Adding to a list
  const addIngredientHandler = ingredient => {
    setUserIngredients(prevIngredients => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredient }
    ]);
  };

  // Removing from a list
  const removeIngredientHandler = ingredientID => {
    setUserIngredients(prevIngredients => prevIngredients.filter((ingredient) => ingredient.id !== ingredientID));
    /* This gets run on every element inside. We filter and display only if the ingredient.id IS NOT equal to
    the ingredientID input. If it is, then it is filtered OUT. The input is done via a onClick event.

    */
  }

  return (
    <div className="App">
      <IngredientForm
        onAddIngredient={addIngredientHandler}
      />
      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
