import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserData, loadUsersList } from '../../../../redux/slices/userSlice';
import styles from './Profile.module.scss';

const Profile = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUserData());

    useEffect(() => {
        dispatch(loadUsersList());
    }, [dispatch]);
    return (
        <div className={styles.Profile}>
            {currentUser && (
                <h3
                    className={
                        styles.Profile_head
                    }>{`Приветствуем, ${currentUser.name}. Скоро здесь будет больше информации `}</h3>
            )}
        </div>
    );
};

export default Profile;
