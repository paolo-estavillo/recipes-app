import Image from "next/image";
import Link from "next/link";
import { RecipesMetadata } from "@/lib/recipes";

interface RecipeProps {
    id: RecipesMetadata['id'];
    name: RecipesMetadata['name'];
    imageUrl: RecipesMetadata['imageUrl'];
}

function RecipeCard(props: RecipeProps) {
    const { id, name, imageUrl } = props;

    return (
        <div className="w-4/5 h-80 md:w-3/12">
            <Link href={`recipes/${id}`}>
                <div 
                    className={'recipe-card w-full h-full rounded-md bg-white text-green-800 hover:bg-green-700 hover:text-white hover:scale-110 ' +
                    " transition-all"}
                >
                    <Image
                        src={imageUrl}
                        width={1000}
                        height={1000}
                        alt={name}
                        style={{objectFit: 'cover', width: '100%', height: '80%', borderRadius: '0.375em 0.375em 0 0'}}
                    />
                    <div 
                        className={"flex justify-center items-center text-center text-xl font-semibold " +
                        " text-inherit"}
                        style={{height: '20%'}}
                    >{name}</div>
                </div>
            </Link>
        </div>
    );
}

export default RecipeCard;