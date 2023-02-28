import React from 'react';
import styles from './YandexMap.module.scss';

const YandexMap = () => {
    return (
        <section className={styles.YandexMap}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <a
                    href='https://yandex.ru/maps/org/mfk_bashnya_federatsiya/177194224888/?utm_medium=mapframe&utm_source=maps'
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                    МФК Башня Федерация
                </a>
                <a
                    href='https://yandex.ru/maps/213/moscow/category/housing_complex/64960171169/?utm_medium=mapframe&utm_source=maps'
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                    Жилой комплекс в Москве
                </a>
                <iframe
                    src='https://yandex.ru/map-widget/v1/?from=tabbar&indoorLevel=1&ll=37.536847%2C55.749633&mode=search&oid=177194224888&ol=biz&sctx=ZAAAAAgCEAAaKAoSCWQEVDiCqkJAERQ%2Fxty1wEtAEhIJPPpfrkULgD8R0Chd%2Bpekgj8iBgABAgMEBSgKOABA4pkGSAFiK3JlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vRW5hYmxlQmVhdXR5RmlsdGVyPTFqAnJ1nQHNzEw9oAEAqAEAvQHWw%2FnTwgEc%2BJnljJQFyOnquATJiqzdfr6d7LaCA6KX%2B8WIB%2BoBAPIBAPgBAIICM9Cx0LDRiNC90Y8g0YTQtdC00LXRgNCw0YbQuNC4INC80L7RgdC60LLQsCDRgdC40YLQuIoCAJICAzIxM5oCDGRlc2t0b3AtbWFwcw%3D%3D&sll=37.536847%2C55.749633&source=serp_navig&sspn=0.003653%2C0.001244&text=%D0%B1%D0%B0%D1%88%D0%BD%D1%8F%20%D1%84%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8%20%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%20%D1%81%D0%B8%D1%82%D0%B8&z=18.56'
                    title='mapCity'
                    width='560'
                    height='400'
                    frameBorder='1'
                    allowFullScreen={true}
                    style={{ position: 'relative' }}></iframe>
            </div>

            <div className={styles.YandexMap_aboutKit}>
                <span>
                    Офис общественно-политической газеты{' '}
                    <img
                        src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/gallery%2FprezidentWhite.jpeg?alt=media&token=135bcc13-fc1a-4d8c-9c72-e85e072c7a68'
                        alt=''
                        width={100}
                    />
                    :
                </span>
                <ul>
                    <li>Деловой Центр 225 м.</li>
                    <li>Международная 290 м.</li>
                    <li>Выставочная 373 м.</li>
                </ul>
                <span>Генеральный директор: Удалов Виктор Сергеевич</span>
            </div>
        </section>
    );
};

export default YandexMap;
