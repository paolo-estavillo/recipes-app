import { getRecipesList } from "@/lib/recipes";
import RecipesList from "./RecipesList";
import RecipeCard from "./RecipeCard";

export default function Page() {
    let recipesList = getRecipesList();

    // console.log(recipesMetaDatas);
    let recipes = recipesList.map((recipe) => (
        <RecipeCard
            name={recipe.name}
            imageUrl={recipe.imageUrl}
            key={recipe.id}
            id={recipe.id}
        />)
    );

    return (
        <div className="w-full">
            <RecipesList>
                {recipes}
            </RecipesList>
        </div>
    );
}