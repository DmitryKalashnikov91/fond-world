import PayForm from './app/components/common/form/payform/PayForm';
import Main from './app/components/pages/main/Main';
import NewsBlock from './app/components/pages/news/NewsBlock';
import Newspapers from './app/components/pages/newspapers/Newspapers';
import PoemsBlock from './app/components/pages/poems/PoemsBlock';
import Program from './app/components/pages/program/Program';
import Regions from './app/components/pages/regions/Regions';
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
];

export default routes;
