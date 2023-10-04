'use client';

import type { RecipesMetadata } from '@/lib/recipes';
import Recipe from './RecipeCard';
import Link from 'next/link';
import { Children, useState } from 'react';

interface RecipesListProps {
    children: React.ReactNode;
}

const PAGE_LIMIT = 6;

function RecipesList(props: RecipesListProps) {
    let [pageNumber, setPageNumber] = useState(1);
    const { children } = props;
    let arrayChildren = Children.toArray(children);

    const idx = pageNumber - 1;
    const startRecipeIdx = idx * PAGE_LIMIT;
    const endRecipeIdx = startRecipeIdx + PAGE_LIMIT;

    const increment = () => {
        const newPageNumber = pageNumber + 1;
        const newStartIdx = newPageNumber - 1;
        if (newStartIdx * PAGE_LIMIT >= arrayChildren.length)
            return;
        setPageNumber(newPageNumber);
    }

    const decrement = () => {
        const newPageNumber = pageNumber - 1;
        if (newPageNumber <= 0)
            return;
        setPageNumber(newPageNumber);
    }

    let displayedRecipes = arrayChildren.slice(startRecipeIdx, endRecipeIdx+1);

    return (
        <div className="flex flex-col">
            <div className='buttons flex justify-around mb-12 items-center'>
                <button className="text-4xl" onClick={decrement}>{'<'}</button>
                <strong className="text-3xl">{pageNumber}</strong>
                <button className="text-4xl" onClick={increment}>{'>'}</button>
            </div>

            <div className='flex justify-center flex-wrap gap-6 mx-1'>
                {displayedRecipes}
            </div>
        </div>
    )
}

export default RecipesList;