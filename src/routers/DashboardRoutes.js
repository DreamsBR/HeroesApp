import React from 'react'
import { Navbar } from '../components/maven/ui/Navbar'
import {Switch, Route, Redirect} from 'react-router-dom'
import { MarvelScreem } from '../components/maven/MarvelScreem'
import { HeroScreem } from '../components/heroes/HeroScreem'
import { DcScreem } from '../components/dc/DcScreem'
import { SearchScreem } from '../components/search/SearchScreem'

export const DashboardRoutes = () => {
    
    
    return (
        <>
            <Navbar/>
            <div className="container mt-2">
                <Switch>
                    <Route path="/marvel"  component={MarvelScreem}/>
                    <Route path="/hero/:heroeId"  component={ HeroScreem }/>
                    <Route path="/dc"  component={DcScreem}/>
                    <Route path="/search"  component={SearchScreem}/>
                    <Redirect to="/marvel"/>                     
                </Switch>
            </div>
        </>
    )
}
