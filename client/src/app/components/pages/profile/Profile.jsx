import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserData, loadUsersList } from '../../../../redux/slices/userSlice';
import styles from './Profile.module.scss';

const Profile = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUserData());
    console.log(currentUser);

    useEffect(() => {
        const users = dispatch(loadUsersList());
    }, [dispatch]);
    return (
        <div className={styles.Profile}>
            {currentUser && (
                <h3
                    className={
                        styles.Profile_head
                    }>{`${currentUser.name} ${currentUser.lastName}`}</h3>
            )}
        </div>
    );
};

export default Profile;
