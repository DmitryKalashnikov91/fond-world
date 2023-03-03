import styles from './Metropol.module.scss';

const Metropol = () => {
    return (
        <div className={styles.Metropol}>
            <div className={styles.Metropol_bg}>
                <div className={styles.Metropol_bg__head}>
                    <h2>Великие традиции Российских Меценатов</h2>
                </div>
                <div className={styles.Metropol_bg__caption}>
                    <span>
                        <article>
                            В Москве, в легендарном отеле «Метрополь», в духе знаменитых меценатов
                            Саввы Морозова и Павла Третьякова, пройдут благотворительные обеды в
                            поддержку Всероссийской акции по установке скульптурных групп и
                            монументов "Дети Донбасса" и "Герои России". Мероприятия начнутся с
                            марта 2023 года.
                        </article>
                        <article className='pt-3'>
                            Заявки по телефону: <a href='tel:+79999152567'>+7 999 915-25-67</a>
                        </article>
                    </span>
                    <div className={styles.Metropol_bg__caption___logos}>
                        <a
                            href='https://presidentmedia.ru/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <img
                                src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/gallery%2Fprezident.jpeg?alt=media&token=a353937a-6439-4f28-82e7-82bb3022dfb9'
                                alt='газета Президент'
                            />
                        </a>
                        <a href='/'>
                            <img
                                src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logo2.jpeg?alt=media&token=b9f6769f-a4c2-4d1b-a77d-bcd90ee3a805'
                                alt='Фонд Наш Мир'
                            />
                        </a>
                        <a
                            href='https://metropol-moscow.ru/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <img
                                src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/Metropol.png?alt=media&token=e7518054-dfea-4e5c-a1ac-d10170821daf'
                                alt='Метрополь'
                            />
                        </a>
                        <a
                            href='https://vk.com/ecotech224'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <img
                                src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/ecoteh.png?alt=media&token=26d7caf1-0af6-473c-a159-4a08d71af57e'
                                alt='Экотех'
                            />
                        </a>
                    </div>
                </div>
                <img
                    className={styles.Metropol_bg__img}
                    src='https://hotels.sletat.ru/i/f/49192_4.jpg'
                    alt='metropol'
                />
            </div>
        </div>
    );
};

export default Metropol;
