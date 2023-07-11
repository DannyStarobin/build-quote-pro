import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import {clients} from '../services/temp.data.service'


export class HomePage extends React.Component {

    state = {
        clientz: ''
    }

    componentDidMount() {
        // console.log('clients:', clients);
        
        this.loadData()
    }
    
    loadData = () => {
        // const localClients = clients
        if (!clients) {
            return
        } else {
            this.setState({ clientz: clients })
        }
    }

    render() {
        const { clientz } = this.state

        return (
            <div className='home-page'>
                <h1 className="flex align center justify-center page-title">Clients</h1>

                <div className='clients-container flex column'>
                    <Link className='client-container clean-link' to='/add-client/:id'>
                        <h1 className='add-client-symbol'>+</h1>
                        <h2 className='add-client-text'>Add new client</h2>
                    </Link>
                    {clientz && clientz.map(client =>
                        <Link className='client-container clean-link' to={`/client-page/${client.clientId}`} key={client.clientId}>
                            <h2>{client.clientName}</h2>
                            <h3>{client.lastUpdate}</h3>
                        </Link>
                    )}
                </div>



            </div>
        )
    }
}