
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export function AppHeader() {

    return (
        <header className="app-header">
            <div>
                <NavLink className="clean-link flex align center justify-center" to='/'>
                    <h1>
                        BuildQuotePro
                    </h1>
                </NavLink>
                <div>
                </div>
                <NavLink className="clean-link" to='/database-center'>
                    <h2>
                        Database center
                    </h2>
                </NavLink>
            </div>

        </header>
    )
}