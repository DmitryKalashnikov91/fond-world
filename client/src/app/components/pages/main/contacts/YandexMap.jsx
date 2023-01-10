import React from 'react';
import styles from './YandexMap.module.scss';

const YandexMap = () => {
    return (
        <div className={styles.YandexMap}>
            <div className='mt-5 ms-2' style={{ position: 'relative', overFlow: 'hidden' }}>
                <a
                    href='https://yandex.ru/maps/org/kit/101868865464/?utm_medium=mapframe&utm_source=maps'
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                    Кит
                </a>
                <a
                    href='https://yandex.ru/maps/213/moscow/category/training/184105476/?utm_medium=mapframe&utm_source=maps'
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                    Тренинги в Москве
                </a>
                <a
                    href='https://yandex.ru/maps/213/moscow/category/auditing_company/184105390/?utm_medium=mapframe&utm_source=maps'
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '28px' }}>
                    Аудиторская компания в Москве
                </a>
                <iframe
                    src='https://yandex.ru/map-widget/v1/-/CCUvqIaQ3A'
                    width='350'
                    title='yanFrame'
                    height='240'
                    frameBorder='1'
                    allowFullScreen={true}
                    style={{ position: 'relative' }}></iframe>
            </div>
            <div className={styles.YandexMap_aboutKit}>
                <span>Учебный центр КИТ расположен в пешей доступности от метро:</span>
                <ul>
                    <li>Беговая 1,2 км</li>
                    <li>ЦСКА 1,3 км</li>
                    <li>Полежаевская 1,9 км</li>
                </ul>
                <span>
                    С удобным подъездом с ТТК, Ленинградского проспекта и Хорошёвского шоссе
                </span>
            </div>
        </div>
    );
};

export default YandexMap;
