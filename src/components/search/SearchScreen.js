import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selector/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({text: q});
    const {text} = values;

    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${text}`);
    }

    const heros = useMemo(() => getHeroesByName(q), [q]);


    return (
        <div>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>

                        <input 
                            type="text"
                            placeholder="Search.."
                            className="form-control"
                            autoComplete="off"
                            name="text"
                            value={text}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="mt-3 btn btn-block btn-outline-primary"
                        >Search    
                        </button>

                    </form>

                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    
                    {
                    
                    heros.map( hero => (
                        <HeroeCard 
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
 