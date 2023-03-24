import { useNavigate } from 'react-router-dom';
import styles from './Metropol.module.scss';

const Metropol = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.Metropol}>
            <div className={styles.Metropol_bg}>
                <div className={styles.Metropol_bg__head}>
                    <h2>Поэтический конкурс "Дети Донбасса - Дети России"</h2>
                </div>
                <div className={styles.Metropol_bg__caption}>
                    <span>
                        Телеграм-канал "Меценат", Международный форум "Наш Мир-21 век" объявляют
                        поэтический конкурс "Дети Донбасса - Дети России".
                    </span>
                    <p className='mt-5'>
                        {' '}
                        Председатель жюри - Игорь Караулов, поэт, публицист, общественный деятель.
                    </p>
                    <p>
                        Художественный руководитель - Александр Савин, заслуженный артист РФ, поэт,
                        певец, композитор.
                    </p>
                    <p>
                        Продюсер - Игорь А.Алекс, руководитель МФКЭС "Наш Мир-21 век" и
                        Всероссийской благотворительной акции "Дети Донбасса" и "Героям России"
                    </p>

                    <article className='pt-3 fs-6  text-start'>
                        Произведения принимаются на эл.почту
                        <a href='mailto:info@org-nashmir.tech'> info@org-nashmir.tech</a> до 15
                        апреля 2023 года. (Окончание первого тура).
                    </article>
                    <div className={styles.Metropol_bg__caption___button}>
                        <button className='btn btn-primary' onClick={() => navigate('/poems')}>
                            Подробно о конкурсе
                        </button>
                    </div>
                </div>
                <img
                    className={styles.Metropol_bg__img}
                    src='https://images.unsplash.com/photo-1531368345462-e180bd618c89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='metropol'
                />
            </div>
        </div>
    );
};

export default Metropol;
