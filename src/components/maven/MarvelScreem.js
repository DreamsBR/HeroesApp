import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreem = () => {
    const marvelPubli = 'Marvel Comics'
    
    return (
        <div>
            <h1>Mavel Screem</h1>
            <HeroList publisher={marvelPubli}/>
        </div>
    )
}
