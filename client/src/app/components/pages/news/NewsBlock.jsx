import dep from './photo/gosdep.png';
import logo from '../../../../images/logo.jpeg';
import styles from './NewsBlock.module.scss';
const NewsBlock = () => {
    return (
        <>
            <div className={styles.news_header}>
                <h2 className='text-danger'>Последние новости Фонда</h2>
            </div>
            <section className={styles.news}>
                <div className={styles.news_block}>
                    <div className={styles.news_photo}>
                        <img src={dep} alt='departament' width={100} height='auto' />
                        <div className={styles.news_label}>В коридорах законодательной власти</div>
                        <div className={styles.news_date}>
                            <p>21 декабря 2022 г.</p>
                        </div>
                    </div>
                    <div className={styles.news_string}>
                        <span>
                            21 декабря состоялась встреча в Комитете по культуре Государственной
                            Думы РФ. Предмет встречи - стратегическое сотрудничество в рамках
                            Всероссийской акции "Скульптурные группы и монументы "Дети Донбасса" и
                            "Героям России". Договорились о дальнейшем налаживании взаимодействия.
                        </span>
                    </div>
                </div>
                <div className={styles.news_block}>
                    <div className={styles.news_photo}>
                        <img src={logo} alt='departament' width={100} height='auto' />
                        <div className={styles.news_label}>НАШ МИР-21 ВЕК</div>
                        <div className={styles.news_date}>
                            <p>19 декабря 2022 г.</p>
                        </div>
                    </div>
                    <div className={styles.news_string}>
                        <span>
                            19 декабря состоялась рабочая встреча-совещание инициативой группы
                            Всероссийской акции "Скульптурные группы и монументы "Дети Донбасса".
                            <p>
                                Адрес: м. Беговая, ул. Поликарпова, 27 с 3, Образовательный Центр
                                "КИТ" (партнёр- меценат проектов Международного объединения "Мир-21
                                век")
                            </p>
                            <a
                                href='https://xn-----7kcoxxccf2a8a6c.xn--p1ai/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                фонд-наш-мир.рф
                            </a>
                            ,{' '}
                            <a href='https://kit.ru.com' target='_blank' rel='noopener noreferrer'>
                                kit.ru.com
                            </a>
                            ,{' '}
                            <a
                                href='https://rushelpfond.ru'
                                target='_blank'
                                rel='noopener noreferrer'>
                                rushelpfond.ru
                            </a>{' '}
                            <p>
                                Информпартнёр: Общественно-политическая газета "ПРЕЗИДЕНТ" (изд. с
                                1993 г.).
                            </p>
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsBlock;
