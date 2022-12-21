// Libraries

import Sketches from './sketches/Sketches';
import img from './sketches/images/mainMon.png';
import AboutProject from './aboutProject/AboutProject';
import MainButton from '../../common/MainButton';
import Partners from './partners/Partners';

const Main = () => {
    return (
        <>
            <div className='main'>
                <h1 className='text-danger'>ВСЕРОССИЙСКАЯ БЛАГОТВОРИТЕЛЬНАЯ АКЦИЯ</h1>
                <div className='main_content'>
                    <section className='description'>
                        <h2 className='text-danger'>
                            Установка скульптурных групп и монументов &quot;Дети Донбасса&quot; и
                            &quot;Героям России&quot;
                        </h2>
                        <p className='text-primary mt-5'>
                            Все работы – оригинального характера, с указанием имени автора
                            (художника, скульптора).
                        </p>
                        <p className='text-primary mt-5'>
                            Материал – природный камень, бетон, металлы (бронза, др.).
                        </p>
                        <MainButton title='Поддержать проект' />
                    </section>

                    <div className='bgimage mb-5'>
                        <img src={img} alt='bg' />
                    </div>
                </div>
            </div>

            <div className='sub_title' id='images'>
                <h3>Скульптурные группы и эскизы</h3>
            </div>
            <Sketches />
            <AboutProject />
            <div className='sub_title ' id='images'>
                <h3>Наш МИР поддержали:</h3>
            </div>
            <Partners />
        </>
    );
};

export default Main;
