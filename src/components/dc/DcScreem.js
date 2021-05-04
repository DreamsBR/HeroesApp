import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreem = () => {
    
    const dcPubli = 'DC Comics'
    
    return (
        <div>
            <h1>DC Screem</h1>
            <HeroList  publisher={dcPubli}/>
        </div>
    )
}
