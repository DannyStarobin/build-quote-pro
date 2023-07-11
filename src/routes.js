import { AddClient } from "./pages/add-client";
import { AddDatabase } from "./pages/add-database";
import { AddProject } from "./pages/add-project";
import { ClientPage } from "./pages/client-page";
import { DatabaseCenter } from "./pages/databas-center";
import { HomePage } from "./pages/home-page";
import { ProjectPage } from "./pages/project-page"


// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        exact: true

    },
    {
        path: '/add-client/:id',
        component: <AddClient />,
        exact: false

    },
    {
        path: '/database-center',
        component: <DatabaseCenter />,
        exact: false

    },
    {
        path: '/add-database',
        component: <AddDatabase />,
        exact: false

    },
    {
        path: '/client-page/:id',
        component: <ClientPage />,
        exact: false

    },
    {
        path: '/poject-page/:clientId/:projectId',
        component: <ProjectPage />,
        exact: true

    },
    {
        path: '/add-project',
        component: <AddProject />,
        exact: false

    },
]

export default routes;