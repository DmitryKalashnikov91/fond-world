import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainButton = ({ title }) => {
    const navigate = useNavigate();
    return (
        <div className='main_button mt-5'>
            <button onClick={() => navigate('/payform')}>{title}</button>
        </div>
    );
};

export default MainButton;
