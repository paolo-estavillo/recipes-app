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
        <Link href={`recipes/${id}`}>
            <div className='recipe-card w-52 h-64 bg-white'>
                <Image
                    src={imageUrl}
                    width={300}
                    height={300}
                    alt={name}
                    style={{objectFit: 'cover', width: '100%', height: '80%'}}
                />
                <h5 className="text-center">{name}</h5>
            </div>
        </Link>
    );
}

export default RecipeCard;