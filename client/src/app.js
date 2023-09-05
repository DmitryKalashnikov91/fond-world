import withRouter from './hoc/withRouter';
import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

import { UpButton } from './app/components/common/scrollTop/upButton';
import Header from './app/components/header';
import Footer from './app/components/footer';
//style
import './styles/app.scss';

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const elements = useRoutes(routes);

    return (
        <div className='app'>
            <Header />
            {elements}
            <Footer />
            <UpButton />
        </div>
    );
};
const AppWithRoutes = withRouter(App);
export default AppWithRoutes;
