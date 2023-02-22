import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    getCurrentUserData,
    getIsLoggedIn,
    loadUsersList,
    logOut,
} from '../../../../redux/slices/userSlice';
import styles from './Profile.module.scss';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const currentUser = useSelector(getCurrentUserData());
    const handleLogOut = () => {
        dispatch(logOut());
        navigate('/');
    };

    useEffect(() => {
        dispatch(loadUsersList());
    }, [dispatch]);
    return (
        <div className={styles.Profile}>
            {currentUser && (
                <div>
                    <input type='file' />
                    <h3
                        className={
                            styles.Profile_head
                        }>{`Приветствуем, ${currentUser.name}. Скоро здесь будет больше информации `}</h3>

                    <button className='btn btn-danger' onClick={handleLogOut}>
                        Выйти
                    </button>
                    <button className='btn btn-primary ms-2' onClick={() => navigate('/')}>
                        На главную
                    </button>
                </div>
            )}
        </div>
    );
};

export default Profile;
