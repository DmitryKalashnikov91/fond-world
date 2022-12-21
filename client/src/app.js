//style
import './styles/app.scss';

import withRouter from './hoc/withRouter';

import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Header from './app/components/header';

const App = () => {
    const elements = useRoutes(routes);

    return (
        <div className='app'>
            <Header />
            {elements}
        </div>
    );
};
const AppWithRoutes = withRouter(App);
export default AppWithRoutes;
