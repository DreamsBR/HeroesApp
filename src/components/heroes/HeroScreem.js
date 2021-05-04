import React, { useMemo } from 'react'
import { useParams, Redirect } from "react-router-dom";
import { getHeroeById } from '../selectors/getHeroeById';

export const HeroScreem = ({history}) => {
    
    const {heroeId} = useParams();

    const heroe = useMemo(() => getHeroeById(heroeId),[heroeId])

    // const heroe = getHeroeById(heroeId)
    
    if(!heroe){
        return <Redirect to="/"/>
    }

    const handleReturn = () =>{
        history.goBack()
    }

    const { id, 
        superhero ,   
        publisher, 
        alter_ego ,
        first_appearance ,
        characters} = heroe
    
    console.log(heroe);

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`} 
                     alt={superhero}
                     className="img-thumbnail animate__animated animate__fadeInLeftBig"
                     />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush animate__animated animate__backInLeft">
                    <li className="list-group-item">Alter Ego: {alter_ego}</li>
                    <li className="list-group-item">publisher: {publisher}</li>
                    <li className="list-group-item">first_appearance: {first_appearance}</li>                    
                </ul>
                <br/>
                <div className="animate__animated animate__backInRight">
                    <h5 className="">Caraceteres :</h5>
                    <p className="text-center">{characters}</p>
                </div>
            <button
                className="btn btn-ouline-info float-right"
                onClick={handleReturn}
            >
                Retun
            </button>
            </div>

            
        </div>
    )
}
