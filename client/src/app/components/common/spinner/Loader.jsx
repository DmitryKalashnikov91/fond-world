import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from './Spinner.module.scss';

export const Loader = () => {
    return (
        <Spinner animation='border' role='status' variant='primary' className={styles.spinner}>
            <span className='visually-hidden'>Loading...</span>
        </Spinner>
    );
};
