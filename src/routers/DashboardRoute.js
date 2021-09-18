import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { MarlvelScreen } from '../components/marvel/MarlvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { SearchScreen } from '../components/search/SearchScreen';

import { Navbar } from '../components/ui/Navbar';


export const DashboardRoute = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-3">
            <Switch>
                <Route exact path="/marvel" component={MarlvelScreen} />
                <Route exact path="/heroe/:heroeId" component={HeroesScreen} />
                <Route exact path="/dc" component={DcScreen} />
                <Route exact path="/search" component={SearchScreen} />
            
                <Redirect to="/marvel" />

            </Switch>
            </div>
        </>
    )
}
