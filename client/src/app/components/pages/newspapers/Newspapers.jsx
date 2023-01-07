import React from 'react';
import Alert from 'react-bootstrap/Alert';
import parse from 'html-react-parser';
import styles from './Newspapers.module.scss';
import { newspapers } from './mockNews/news';
const Newspapers = () => {
    return (
        <section className={styles.newspapers}>
            {newspapers.map((item) => (
                <Alert variant='secondary' className={styles.newspapers_card} key={item.id}>
                    <div className={styles.newspapers_card__header}>
                        <strong>{item.header}</strong>
                        <a href={item.hyperlink} target='_blank' rel='noreferrer'>
                            {parse(item.title)}
                        </a>
                    </div>

                    <div className={styles.newspapers_card__content}>
                        <span>{item.content}</span>
                        <button className='btn btn-outline-primary'>
                            <a href={item.linkToItem} target='_blank' rel='noreferrer'>
                                Читать статью
                            </a>
                        </button>
                    </div>
                </Alert>
            ))}
        </section>
    );
};

export default Newspapers;
