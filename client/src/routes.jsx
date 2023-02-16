import { Navigate } from 'react-router-dom';
import PayForm from './app/components/common/form/payform/PayForm';
import Faces from './app/components/pages/aboutUs/Faces';
import Main from './app/components/pages/main/Main';
import NewsBlock from './app/components/pages/news/NewsBlock';
import Newspapers from './app/components/pages/newspapers/Newspapers';
import PoemsBlock from './app/components/pages/poems/PoemsBlock';
import Profile from './app/components/pages/profile/Profile';
import Program from './app/components/pages/program/Program';
import Regions from './app/components/pages/regions/Regions';
import { Login } from './app/components/pages/register/Login';
import LoginForm from './app/components/pages/register/LoginForm';
import RegisterForm from './app/components/pages/register/RegisterForm';
import Trustees from './app/components/pages/trustees/Trustees';
import VideoBlock from './app/components/pages/videos/VideoBlock';

const routes = [
    //main
    {
        path: '',
        element: <Main />,
    },
    {
        path: 'news',
        element: <NewsBlock />,
    },
    {
        path: 'poems',
        element: <PoemsBlock />,
    },
    {
        path: 'video',
        element: <VideoBlock />,
    },
    {
        path: 'payform',
        element: <PayForm />,
    },
    {
        path: 'newspapers',
        element: <Newspapers />,
    },
    {
        path: 'program',
        element: <Program />,
    },
    {
        path: 'regions',
        element: <Regions />,
    },
    {
        path: 'trustees',
        element: <Trustees />,
    },
    {
        path: 'faces',
        element: <Faces />,
    },
    {
        path: 'auth',
        element: <Login />,
        children: [
            {
                path: '',
                element: <Navigate to='login' />,
            },
            {
                path: 'login',
                element: <LoginForm />,
            },
            {
                path: 'signup',
                element: <RegisterForm />,
            },
            // {
            //     path: '*',
            //     element: <Navigate to='/auth/login' />,
            // },
        ],
    },
    {
        path: 'profile',
        element: <Profile />,
    },
];

export default routes;
