import { useNavigate } from 'react-router-dom';

const Money = () => {
    const navigate = useNavigate();
    return (
        <div
            className='fixed-top w-100 text-center money
        '>
            <button className='p-2 px-4' onClick={() => navigate('payform')}>
                Стать меценатом
            </button>
        </div>
    );
};

export default Money;
