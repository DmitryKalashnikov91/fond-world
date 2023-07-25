import React from 'react';
import styles from './Chields-block.module.scss';

export const ChieldsBlock = () => {
    return (
        <>
            <div className={styles.Wrap + ' animate pop'}>
                <div className={styles.Wrap_overlay}>
                    <div className={styles.Wrap_overlay__content + ' animate slide-left delay-2'}>
                        <h1 className='animate slide-left pop delay-4 text-light'>
                            Дети Донбасса - Дети России
                        </h1>
                        <p
                            className='animate slide-left pop delay-5'
                            style={{ color: 'white', marginBottom: '2.5rem' }}>
                            Всероссийская акция
                        </p>
                    </div>
                    <div
                        className={
                            styles.Wrap_overlay__image_content + ' animate slide delay-5'
                        }></div>
                    <div className={styles.Wrap_overlay__dots + ' animate'}>
                        <div
                            className={
                                styles.Wrap_overlay__dots_dot + ' animate slide-up delay-6'
                            }></div>
                        <div
                            className={
                                styles.Wrap_overlay__dots_dot + ' animate slide-up delay-7'
                            }></div>
                        <div
                            className={
                                styles.Wrap_overlay__dots_dot + ' animate slide-up delay-8'
                            }></div>
                    </div>
                </div>
                <div className={styles.Wrap_text}>
                    <p>
                        21 июня 2022 года с главной сцены Дома Правительства Москвы Организаторами и
                        участниками Международного культурно-экономического форума «Наш Мир-21век»
                        была инициирована Всероссийская благотворительная акция «Установка
                        скульптурных групп и монументов «Дети Донбасса» и «Героям России» (автор и
                        руководитель проектов Трушкин Игорь Александрович, известный также как
                        российский писатель Игорь А.Алекс).
                    </p>
                    <p>Автор эскиза – российский художник Орлова Олеся Владимировна.</p>
                    <p>
                        Лицом же проекта стал народный артист, депутат Госдумы РФ Дмитрий Певцов, о
                        чем сообщали российские СМИ.
                    </p>
                    <p>
                        Нашу инициативу поддержали Посольство Донецкой народной республики в РФ в
                        лице Чрезвычайного и Полномочного посла Макеевой Ольги Александровны,
                        Межгосударственный союз городов-героев в лице генерал-полковника Шумилова
                        Л.В. и многие другие организации.
                    </p>
                    <p>
                        Организаторы также выражают благодарность ПАО «Промсвязьбанк», оказавшему
                        финансовую поддержку проекту.
                    </p>
                    <p>
                        21 июля 2023 года в Городе Воинской Славы Наро-Фоминске состоялось открытие
                        первого монумента. В Будущем планируется установка в других регионах и
                        республиках: Саратов, Таганрог, Севастополь, Омск и др.
                    </p>
                </div>
            </div>
            <div className={styles.Video}>
                <div>
                    <span className='pb-2'>Обращение нашего попечителя Дмитрия Певцова</span>
                    <iframe
                        width='350'
                        height='250'
                        src='https://www.youtube.com/embed/6Pg0e9YAoKo'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen></iframe>
                </div>
                <div>
                    <span className='pb-2'>
                        1-й замруководителя фракции «Справедливая Россия - За правду» Дмитрий Гусев
                    </span>
                    <iframe
                        width='350'
                        height='250'
                        src='https://www.youtube.com/embed/vzxhpJeAatY'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen></iframe>
                </div>
            </div>
        </>
    );
};
