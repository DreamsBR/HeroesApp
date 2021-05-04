import { useState } from 'react'

export const useForm = (initialState = {}) => {
    
    const [values, setvalues] = useState(initialState);

    const reseToDo=()=>{
        setvalues(initialState)
    }

    const handleInpustChange = ({target}) => {
        
        setvalues(({
            ...values,
            [target.name] : target.value
        }));
    }

    return [ values, handleInpustChange, reseToDo ]

}
