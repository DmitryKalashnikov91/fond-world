import PayForm from './app/components/common/form/PayForm';
import Main from './app/components/pages/main/Main';
import NewsBlock from './app/components/pages/news/NewsBlock';
import PoemsBlock from './app/components/pages/poems/PoemsBlock';
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
];

export default routes;
