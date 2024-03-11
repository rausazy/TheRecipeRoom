import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Data from "/pages/recipe.json";
import Image from "next/image";
import Head from "next/head";



export default function ViewPage({recipes}) {
  const router = useRouter();
  const { id } = router.query;
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (id) {
      const recipe = Data.find((recipe) => recipe.id === parseInt(id));
      setSelectedRecipe(recipe);
    }
  }, [id]);

  if (!selectedRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <>

    <Head>
    <title>The Recipe Room</title>
    <link rel="icon" href="assets/logo1.png" />
    </Head>
      <section className="viewpage">
          <div className="title">
            <h1 className="recipetitle">{selectedRecipe.Recipe_Name}</h1>
          </div>


          <div className="flex">
          <div className="details">
            <div className="details1">
            <h4 className="deets">Preparation Time: </h4>
            <h4 className="deets">{selectedRecipe.PreparationTime}</h4>
            </div>
            <div className="details1">
              <h4 className="deets">Cooking Time: </h4> 
            <h4 className="deets">{selectedRecipe.CookingTime}</h4>
            </div>
            <div className="details1">
              <h4 className="deets">Difficulty Level:</h4>
            <h4 className="deets">{selectedRecipe.DifficultyLevel}</h4>
            </div>
            <div className="details1">
            <h4 className="deets">Dietary Restriction:</h4>
            <h4 className="deets">{selectedRecipe.DietaryRestriction}</h4>
            </div>
            <div className="details1">
              <h4 className="deets">Calories:</h4>
            <h4 className="deets">{selectedRecipe.Calories}</h4>
            </div>
          </div>

          <div className="img1">
            <Image 
              src= {`/recipics/${selectedRecipe.image1}`} 
              alt="Food"
              width='100'
              height='100'
            />
          </div>

          </div>

          <div className="img2">  
          <Image 
            src= {`/recipics/${selectedRecipe.image2}`}
            alt="Food"
            width='100'
            height='100'
          />
          </div>

          <div className="ingredientslist">
            <h1 className="ingredients">Ingredients:</h1>
            <ul className="ingredients-ul">
            {Object.values(selectedRecipe.Ingredients).map((ingredient, index) => (
                <li className="ingredients-li" key={index}>{ingredient}</li>
            )
            )}
            </ul>
          </div>

          <div className="instructionslist">
            <h1 className="instructions">Instructions:</h1>
            <ol className="instructions-ol">
            {Object.values(selectedRecipe.Instructions).map((instruction, index) => (
                <li className="instructions-li" key={index}>{instruction}

                </li>
            )
            )}
            </ol>
          </div>

          <div className="reciped">
              <h1 className="recipedesc">Recipe Description:</h1>
              <p className="recipedescription">{selectedRecipe.RecipeDescription}</p>
            </div>
      </section>

      
       
    </>
  );
}

