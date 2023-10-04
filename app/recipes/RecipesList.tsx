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
    let totalPageNumber = Math.ceil(arrayChildren.length / PAGE_LIMIT);

    const idx = pageNumber - 1;
    const startRecipeIdx = idx * PAGE_LIMIT;
    // const endRecipeIdx = startRecipeIdx + PAGE_LIMIT;

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

    let displayedRecipes = arrayChildren.slice(startRecipeIdx, startRecipeIdx + PAGE_LIMIT);

    let leftActive = startRecipeIdx > 0;
    let rightActive = startRecipeIdx < displayedRecipes.length;

    return (
        <div className="flex flex-col w-full">
            <div className='buttons flex justify-center gap-8 mb-12 items-center'>
                <div
                    className="text-4xl cursor-pointer transition-all hover:scale-150 hover:text-green-600" onClick={decrement}
                    style={{visibility: leftActive ? 'visible' : 'hidden'}}
                >{'<-'}</div>
                <strong className="text-3xl tracking-widest">{pageNumber}/{totalPageNumber}</strong>
                <div
                    className="text-4xl cursor-pointer transition-all hover:scale-150 hover:text-green-600" onClick={increment}
                    style={{visibility: rightActive ? 'visible' : 'hidden'}}
                >{'->'}</div>
            </div>

            <div className='flex flex-col justify-normal items-center gap-8 md:flex-row md:justify-center md:flex-wrap md:gap-6 md:mx-1 md:w-full'>
                {displayedRecipes}
            </div>
        </div>
    )
}

export default RecipesList;