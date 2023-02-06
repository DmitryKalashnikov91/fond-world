import React from 'react';
import styles from './YandexMap.module.scss';

const YandexMap = () => {
    return (
        <section className={styles.YandexMap}>
            <div style={{ position: 'relative', overflow: 'hidden' }} className='mt-5 ms-3'>
                <a
                    href='https://yandex.ru/maps/org/telegraf/195656725338/?utm_medium=mapframe&utm_source=maps'
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                    Телеграф
                </a>
                <a
                    href='https://yandex.ru/maps/213/moscow/category/coworking/60934766081/?utm_medium=mapframe&utm_source=maps'
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                    Коворкинг в Москве
                </a>
                <a
                    href='https://yandex.ru/maps/213/moscow/category/sale_and_lease_of_commercial_real_estate/184107521/?utm_medium=mapframe&utm_source=maps'
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '28px' }}>
                    Продажа и аренда коммерческой недвижимости в Москве
                </a>

                <iframe
                    src='https://yandex.ru/map-widget/v1/?from=tabbar&ll=37.609121%2C55.792378&mode=search&oid=195656725338&ol=biz&sctx=ZAAAAAgBEAAaKAoSCcqjG2FRzUJAEbrzxHO24EtAEhIJUP7uHTUmsD8R02weh8H8lT8iBgABAgMEBSgKOABAr5IHSAFiIWFkZF9zbmlwcGV0PXRvcG9ueW1fZGlzY292ZXJ5LzEueGIacmFua2luZ19mb3JtdWxhPWwyX2RjODU0NjViQnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vTGlzdERpc2NvdmVyeS9FbmFibGVEaXNjb3ZlcnlUZXh0UmVxdWVzdHM9MWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9MaXN0RGlzY292ZXJ5L0VuYWJsZVJlcXVlc3RzPTFiOnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vTGlzdERpc2NvdmVyeS9FbmFibGVFbXB0eVJlcXVlc3RzPTFiNXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vTGlzdERpc2NvdmVyeS9FbmFibGVWZXJ0aWNhbD0xYjByZWFycj1zY2hlbWVfTG9jYWwvR2VvL0Fza0Rpc2NvdmVyeUZvclRvcG9ueW1zPTFiOnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vTGlzdERpc2NvdmVyeS9FbmFibGVDb21tb25QaWNNZW51PTFiGnJhbmtpbmdfZm9ybXVsYT1sMl9kYzg1NDY1agJydZ0BzcxMPaABAKgBAL0BnNMXe8IBBtrmsvDYBeoBAPIBAPgBAIICNtGC0LXQu9C10LPRgNCw0YQg0LrQvtCy0L7RgNC60LjQvdCzINC%2B0LHRgNCw0LfRhtC%2B0LLQsIoCAJICAzIxM5oCDGRlc2t0b3AtbWFwcw%3D%3D&sll=37.609121%2C55.792378&source=serp_navig&sspn=0.001971%2C0.000670&text=%D1%82%D0%B5%D0%BB%D0%B5%D0%B3%D1%80%D0%B0%D1%84%20%D0%BA%D0%BE%D0%B2%D0%BE%D1%80%D0%BA%D0%B8%D0%BD%D0%B3%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D1%86%D0%BE%D0%B2%D0%B0&z=19.45'
                    width='560'
                    title='mapTelegraf'
                    height='400'
                    frameBorder='1'
                    allowFullScreen={true}
                    style={{ position: 'relative' }}></iframe>
            </div>
            <div className={styles.YandexMap_aboutKit}>
                <span>Коворкинг Телеграф расположен в пешей доступности от метро:</span>
                <ul>
                    <li>Марьина Роща 540 м.</li>
                    <li>Савеловская 1,47 км</li>
                    <li>Достоевская 1,55 км</li>
                </ul>
                <span>С удобным подъездом с ТТК, заезд с ул. Сущевский Вал</span>
            </div>
        </section>
    );
};

export default YandexMap;
