import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    const addCategory = (value) => {

        if (categories.includes(value)) return

        setCategories([ value, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onEmitValue={ addCategory }
            />

            { 
                categories.map( category => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}

export default GifExpertApp
