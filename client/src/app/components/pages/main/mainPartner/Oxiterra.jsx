import React from 'react';
import Alert from 'react-bootstrap/Alert';
import styles from './Oxiterra.module.scss';

export const Oxiterra = () => {
    return (
        <Alert className={styles.Oxiterra}>
            <div className={styles.Oxiterra_head}>
                <h2>Официальным партнером нашего фонда стала компания Oxyterra</h2>
            </div>
            <div className={styles.Oxiterra_content}>
                <p>
                    Российское инновационное оборудование для дыхательной терапии и гипоксических
                    тренировок. Интервальные гипокси-гипероксические тренировки — это научное
                    название популярного метода дыхания горным воздухом, который улучшает здоровье и
                    повышает работоспособность. Теперь для горной тренировки нет необходимости ехать
                    в горы, - вы можете получить этот эффект, практически не покидая Вашего дома.
                </p>
                <iframe
                    width='500'
                    height='315'
                    src='https://www.youtube.com/embed/68sr_witifM'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen></iframe>
                <a href='https://oxyterra.ru/' target='_blank' rel='noopener noreferrer'>
                    <img
                        src='https://oxyterra.ru/upload/media/logo-footer.png'
                        alt='oxyterra'
                        width={250}
                    />
                </a>
            </div>
        </Alert>
    );
};
