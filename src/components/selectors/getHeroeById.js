import { heroes } from "../data/heroes";

import React from 'react'

export const getHeroeById = (id) => {
    
    
    return heroes.find(e => e.id === id);

}