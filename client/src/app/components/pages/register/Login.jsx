import { Outlet } from 'react-router-dom';

export const Login = () => {
    return (
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-md-6 offset-md-3 shadow mt-5 p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
