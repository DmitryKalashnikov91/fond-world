import styles from './Club.module.scss';
import bgImg from './bg.jpg';
const Club = () => {
    return (
        <section className={styles.Club}>
            <div className={styles.Club_bg}>
                <img src={bgImg} alt='metropol' />
            </div>
            <div className={styles.Club_caption}>
                <div className={styles.Club_caption___content}>
                    <img
                        src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logo2.jpeg?alt=media&token=b9f6769f-a4c2-4d1b-a77d-bcd90ee3a805'
                        alt='фонд-наш-мир'
                        width={150}
                    />
                    <h1 className='text-light'>Закрытый клуб меценатов</h1>
                    <p>
                        Светские мероприятия. Почётные гости - политики, звезды, известные
                        киноактеры и литераторы, дизайнеры. Представители крупных российских
                        компаний.
                    </p>

                    <p>
                        Среди почетных гостей:{' '}
                        <ul>
                            <li></li>
                            <li>УПРАВЛЕНИЕ ДЕЛАМИ ПРЕЗИДЕНТА РФ</li>
                            <li>ГОСДУМА РФ</li>
                            <li>МОСГОРДУМА</li>
                            <li>“ПРОМСВЯЗЬБАНК”</li>
                            <li>“ОТКРЫТИЕ”</li>
                            <li>“ГАЗЭНЕРГОСТРОЙ”</li>и другие
                        </ul>
                    </p>
                </div>
            </div>
            <div className={styles.Club_organizers}>
                <h2 className='text-center'>Организаторы-партнеры:</h2>
                <ul>
                    <li>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logo2.jpeg?alt=media&token=b9f6769f-a4c2-4d1b-a77d-bcd90ee3a805'
                            alt='фонд-наш-мир'
                            width={100}
                        />
                    </li>
                    <li>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/ecoteh.png?alt=media&token=26d7caf1-0af6-473c-a159-4a08d71af57e'
                            alt='Экотех'
                            width={200}
                            className='bg-primary'
                        />
                    </li>
                    <li>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/gallery%2Fprezident.jpeg?alt=media&token=a353937a-6439-4f28-82e7-82bb3022dfb9'
                            alt='газета Президент'
                            width={200}
                        />
                    </li>
                    <li>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/gallery%2Flogo.png?alt=media&token=46dadcfc-c7e3-4fff-a8e4-f51a8cab88ae'
                            alt='журнал Эксперт'
                            width={200}
                        />
                    </li>
                </ul>
            </div>
            <div className='text-center'>
                <span>
                    По вопросам вступления в клуб:
                    <br />
                    <a href='mailto:info@org-nashmir.tech'>info@org-nashmir.tech</a>
                </span>
            </div>
        </section>
    );
};

export default Club;
