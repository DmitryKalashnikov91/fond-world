import MainButton from '../../../common/MainButton';
import styles from './AboutProject.module.scss';

const AboutProject = () => {
    return (
        <section className={styles.about} id='project'>
            <div className={styles.sub_title}>
                <h2>Всероссийская благотворительная акция</h2>
                <span>
                    Установка скульптурных групп и монументов &quot;Дети Донбасса&quot; и
                    &quot;Герои России&quot;
                </span>
            </div>
            <div className={styles.content}>
                <span>
                    Сбор средств на установку скульптурной группы в Луганске, Мариуполе и Москве
                </span>
                <p>
                    Все работы – оригинального характера, с указанием имени автора (художника,
                    скульптора).
                </p>
                <MainButton title={'Принять участие'} />
                <p className={styles.content_text}>
                    Сбор средств осуществляется на благотворительной (безвозмездной) основе, путем
                    пожертвований частных лиц и организаций на расчетный счет БФ «РусПомощь» (в т.ч.
                    через короткий sms-номер).
                </p>
            </div>

            <div className={styles.background}></div>
        </section>
    );
};

export default AboutProject;
