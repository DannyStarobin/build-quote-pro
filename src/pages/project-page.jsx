import React from 'react';
import { Routes, Link, useParams } from 'react-router-dom';
import { clients } from '../services/temp.data.service'

export function ProjectPage() {
    let { projectId, clientId } = useParams();
    // let currentClient = clients.find((client) => client.clientId === +id)
    // console.log('projectId:',projectId );
    // console.log('clientId:',clientId );
    let currentClient = clients.find((client) => client.clientId === +clientId)
    let currentProject = currentClient.projects.find((project) => project.projectId === +projectId)





    return (
        <div>
            <h1>Project Page!</h1>
            <h2>{currentProject.projectName}</h2>
            <h3>Created at: {currentProject.createdAt}</h3>
            <h3>Last update: {currentProject.lastUpdate}</h3>
            <h3>Total price: {currentProject.totalPrice} nis</h3>
        </div>
    );

}