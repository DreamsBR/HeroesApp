import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HerdoCard } from './HerdoCard';

export const HeroList = ({publisher}) => {
    
    const heroes = useMemo(() => getHeroesByPublisher(publisher),[publisher])

 
    
    return (
        
        <div className="card-columns animate__animated animate__backInRight">
            {
                heroes.map( heroe => (
                    <HerdoCard 
                        key={heroe.id}                         
                        {...heroe}
                    >
                    </HerdoCard>
                ))
            }
        </div>   
        
    )
}
