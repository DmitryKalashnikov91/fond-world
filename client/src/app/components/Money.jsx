import { useNavigate } from 'react-router-dom';

const Money = () => {
    const navigate = useNavigate();
    return (
        <div
            className='fixed-top w-100  bg-primary text-center money
        '>
            <button onClick={() => navigate('payform')}>Стать меценатом</button>
        </div>
    );
};

export default Money;
