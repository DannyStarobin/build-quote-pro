import React from 'react'

import { Routes, Route } from 'react-router-dom'

import routes from './routes.js'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'


export class RootCmp extends React.Component {

    render() {
        return (
            <div>
                <AppHeader />
                <main>
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact={route.exact} element={route.component} path={route.path} />)}
                    </Routes>
                </main>
                <AppFooter />
            </div>
        )
    }
}


