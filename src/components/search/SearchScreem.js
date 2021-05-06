import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router';
import { heroes } from '../data/heroes'
import { HerdoCard } from '../heroes/HerdoCard';
import { useForm } from '../hooks/useForm';
import queryString from "query-string";
import { getHerosByName } from '../selectors/getHeroByName';
export const SearchScreem = ({history}) => {
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search)
    
        
    // console.log(heroesFIltered);

    const [values, handleInpustChange ] = useForm(
        {
            searchText:q
        })
    
    const {searchText} = values;
    const  heroesFIltered = useMemo(() => getHerosByName(searchText), [q])
     

    
    const handleSubitmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
        // console.log(searchText);
    }

    
    
    


    return (
        <div>
            <h1>Search Hero</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Hero</h4>
                    <hr/>
                    <form onSubmit={handleSubitmit}>
                        <input  
                            type="text"
                            placeholder="Ingrese Heroe"
                            className="form-control"                 
                            name="searchText"
                            value={searchText}
                            onChange={handleInpustChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary mt-2 form-control "                            
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <hr />
                        {
                            (q==='')
                                &&
                            <div className="alert alert-danger">
                                <h4>No hay resultados</h4>                            
                            </div>
                        }
                        {
                            (q!=='' && heroesFIltered.length === 0)
                                &&
                            <div className="alert alert-danger">
                                <h4>No hay coincidencias con "{q}"</h4>                            
                            </div>
                        }
                    {
                        heroesFIltered.map(hero => (                            
                            <HerdoCard 
                                key={hero.id}
                                {...hero}
                            />

                        ))
                    }
                </div>
                


            </div>

        </div>
    )
}
