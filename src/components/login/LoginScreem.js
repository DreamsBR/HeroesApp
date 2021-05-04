import React from 'react'

export const LoginScreem = ({history}) => {
    
    
    const handleClick  = ()=>{
        if(history.length <= 2){
            history.push('/')
        }
        history.replace('/')

    }
    return (
        <div className="container mt-5">
            <h1>LoginScreem</h1>

            <button
                className="btn btn-primary"
                onClick={handleClick}

            >
                Login
            </button>
        </div>
    )
}
