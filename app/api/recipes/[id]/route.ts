import fs from 'fs';
import { NextRequest, NextResponse } from "next/server";
import { RecipesMetadata, getRecipesIdList, recipesDirectory } from "@/lib/recipes";
import path from "path";

export async function generateStaticParams() {
    const ids = await getRecipesIdList();

    return ids.map(id => ({
        id,
    }));
}

export const dynamicParams = false;

export async function GET(
    request: NextRequest,
    { params }: { params: { id: RecipesMetadata['id'] } }
) {
    const id = params.id;

    const fullPath = path.join(recipesDirectory, `${id}.json`);

    // if (!fs.existsSync(fullPath))
    //     return new Response("Not Found");

    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
}