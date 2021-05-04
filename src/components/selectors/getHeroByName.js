import { heroes } from "../data/heroes";

export const getHerosByName = (name) => {
    if(name===''){
        return[];
    }
    name = name.toLocaleLowerCase();
    return heroes.filter(e=> e.superhero.toLocaleLowerCase().includes(name));
}
