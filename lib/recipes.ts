import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export const recipesDirectory = path.join(process.cwd(), 'public/assets/jsons');

export interface RecipesMetadata {
    id: string;
    name: string;
    imageUrl: string;
    ingredients: string[];
    directions: string[];
}

export function getRecipesList() {
    const fileNames = fs.readdirSync(recipesDirectory);
    let items: RecipesMetadata[] = [];

    const allPostsData = fileNames.forEach((fileName) => {
        // const id = Number(fileName.replace(/\.md$/, ''));

        const fullPath = path.join(recipesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        // const matterResult = matter(fileContents);
        const data = JSON.parse(fileContents);

        items.push({
            ...(data as RecipesMetadata)
        });
    })

    return items;
}

export async function getRecipesIdList() {
    const fileNames = fs.readdirSync(recipesDirectory);

    let ids: RecipesMetadata['id'][] = [];

    fileNames.forEach(fileName => {
        if (fileName.endsWith(".json")) {
            let id = fileName.replace(".json", '');
            ids.push(id);
        }
    })

    return ids;
}

export async function getRecipeData(id: RecipesMetadata['id']) {
    const fullPath = path.join(recipesDirectory, `${id}.json`);
    // const fullPath = path.join(recipesDirectory, `${id}.yaml`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // const matterResult = matter(fileContents);
    const data = JSON.parse(fileContents);

    // const processedContent = await remark().use(html).process(matterResult.content);
    // const contentHtml = processedContent.toString();

    return {
        ...(data as RecipesMetadata),
    };
}