import withRouter from './hoc/withRouter';

import { useRoutes } from 'react-router-dom';
import routes from './routes';

import Header from './app/components/header';
import Footer from './app/components/footer';
//style
import './styles/app.scss';

const App = () => {
    const elements = useRoutes(routes);

    return (
        <div className='app'>
            <Header />
            {elements}
            <Footer />
        </div>
    );
};
const AppWithRoutes = withRouter(App);
export default AppWithRoutes;
