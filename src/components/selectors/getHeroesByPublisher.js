import { heroes } from "../data/heroes";

import React from 'react'

export const getHeroesByPublisher = (publisher) => {
    
    
    const validPublicShers = ['DC Comics', 'Marvel Comics']

    if(!validPublicShers.includes(publisher)){
        throw new Error(`${publisher} no es correcto`);
    }

    return heroes.filter(e => e.publisher === publisher);

}
