import { useState } from "react"

export const AddCategory = ({ onEmitValue }) => {

    const [inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newValue = inputValue.trim();
        if (newValue.length < 1) return;

        onEmitValue(newValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="search gifts"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
