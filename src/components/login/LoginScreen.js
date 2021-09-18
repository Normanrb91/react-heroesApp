import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const hanleLogin = () =>{

        dispatch({
            type: types.login,
            payload: {name: 'Norman'}
        });

        history.replace('/');
    }
    

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={hanleLogin}
            >
                Login
            </button>
        </div>
    )
}
