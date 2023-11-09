import styles from './firstMon.module.scss';

const firstMon = () => {
    return (
        <section className={styles.FirstMon}>
            <div className={styles.FirstMon_head}>
                <h2>
                    Организаторы установки первого монумента "Дети Донбасса - Дети России" в
                    Наро-Фоминске
                </h2>
            </div>
            <div className={styles.FirstMon_content}>
                <h3>
                    <a
                        className='text-light mb-3'
                        href='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/DOCS%2F%D0%BC%D0%B5%D0%BC%D0%BE%D1%80%D0%B0%D0%BD%D0%B4%D1%83%D0%BC%D0%A4%D0%9D%D0%9C.pdf?alt=media&token=01e5232e-dd09-4e4c-a5e8-d7c333309662'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Меморандум
                    </a>
                    , заключённый между организаторами установки первого в России монумента <br />{' '}
                    "Дети Донбасса - Дети России".
                </h3>
                <h4>Стороны, подписавшие Меморандум</h4>
                <ol className='text-light mt-4'>
                    <li>
                        Благотворительный фонд сохранения памяти поколений "Наш Мир-21 век"
                        (Российская Федерация)
                    </li>
                    <li>Международный фонд "Боевое братство без границ" (Республика Беларусь)</li>
                    <li>Фонд "Экотех" (Российская Федерация)</li>
                    <li>
                        Производитель монумента - Компания "Ремстрой Энергия" (Российская Федерация,
                        Нижний Новгород)
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default firstMon;
