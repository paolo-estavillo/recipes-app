import { NextRequest, NextResponse } from "next/server";
import { RecipesMetadata, getRecipesIdList, getRecipesList, recipesDirectory } from "@/lib/recipes";
import path from "path";


export const dynamicParams = false;

export async function GET(
    request: NextRequest,
) {
    const recipesList = getRecipesList();
    const idsList: {[id: string]: string} = {};

    recipesList.forEach(recipe => {
        idsList[recipe.id] = recipe.name
    });

    return NextResponse.json(idsList);
}