import { RecipesMetadata, getRecipeData, getRecipesIdList } from "@/lib/recipes";
import Image from "next/image";
import Parser from 'html-react-parser';

interface PageProps {
    params: {id: RecipesMetadata['id']}
}

export async function generateStaticParams() {
    const ids = await getRecipesIdList();

    return ids.map(id => ({
        id,
    }));
}

export const dynamicParams = false;

async function Page(props: PageProps) {
    const { id } = props.params;

    const recipeData = await getRecipeData(id);
    // const recipeData = await fetch(`/api/recipes/${id}`);

    return (
        <div className="mx-8">
            <h1 className=" text-5xl font-extrabold">{recipeData.name}</h1>
            <div className=" w-full">
                <Image 
                    src={recipeData.imageUrl}
                    alt={recipeData.name}
                    width={800}
                    height={800}
                    style={{ width: 'auto', height: 'auto', margin: '24px auto', objectFit: 'contain'}}
                />
            </div>
            {/* <div>{Parser(recipeData.contentHtml)}</div> */}
            <h2 className="text-4xl font-bold mt-8 mb-4">Ingredients</h2>
            <ul className="list-disc pl-8">
                {recipeData.ingredients.map((ingredient, index) => (
                    <li className=" text-2xl" key={index}>{ingredient}</li>
                ))}
            </ul>

            <h2 className="text-4xl font-bold mt-8 mb-4">Directions</h2>
            <ul>
                {recipeData.directions.map((direction, index) => (
                    <li key={index}>
                        <h3 className="text-3xl font-bold mt-4">{`Step ${index + 1}`}</h3>
                        <p className="text-2xl">{direction}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Page;