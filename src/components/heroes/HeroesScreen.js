import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selector/getHeroeById';

export const HeroesScreen = ({history}) => {

    const {heroeId} = useParams();

    const heroe  = useMemo(() => getHeroeById(heroeId), [heroeId])

    if(!heroe){
        return <Redirect to="/" />
    }

    const handledReturn = () => {

        if(history.length <=2){
            return history.push('/');
        }else{
            return history.goBack();
        }

    }

    const {
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters
    } = heroe

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b> {alter_ego} </li>
                    <li className="list-group-item"><b>Publisher: </b> {publisher} </li>
                    <li className="list-group-item"><b>First Appearance: </b> {first_appearance} </li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-primary"
                    onClick={handledReturn}
                    
                    >Return
                </button>
            </div>
        </div>
    )
}
