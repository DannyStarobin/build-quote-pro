import React from 'react';
import { Routes, Link, useParams } from 'react-router-dom';
import { clients } from '../services/temp.data.service'





export function ClientPage() {
    let { id } = useParams();
    let currentClient = clients.find((client) => client.clientId === +id)





    return (
        <div className='client-page'>
            <h1 className='page-title flex align center justify-center'>Client Page</h1>
            <div className='client-container flex column'>
                <h2>Client name: {currentClient.clientName}</h2>
                <h2>Last update: {currentClient.lastUpdate}</h2>
                <h2>Address: {currentClient.clientAddress}</h2>
                <h2>Phone Number: {currentClient.clientPhone}</h2>
                <h2>Email: {currentClient.clientEmail}</h2>
                <button>Edit client details</button>
            </div>
            <div className='projects-list flex justify-between'>
                {currentClient.projects && currentClient.projects.map(project =>
                    <Link className='project-preview clean-link' to={`/poject-page/${id}/${project.projectId}`} key={project.projectId}>
                        <h2>{project.projectName}</h2>
                        <h3>Created at: {project.createdAt}</h3>
                        <h3>Last update: {project.lastUpdate}</h3>
                        <h3>Total price: {project.totalPrice} nis</h3>

                    </Link>
                )}

            </div>
        </div>
    );
}

