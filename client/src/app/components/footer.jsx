// Libraries
import React from 'react';

const Footer = () => {
    return (
        <footer className='footer' id='contacts'>
            <div className='footer_logo'>
                <img
                    src='https://thumb.tildacdn.com/tild3232-3134-4133-a431-373835393739/-/resize/476x/-/format/webp/21__.png'
                    alt='logo'
                    width={200}
                    height={50}
                />
            </div>
            <section className='footer_content'>
                <span>По вопросам сотрудничества:</span>
                <div className='footer_contacts'>
                    <p>Официальный представитель МФКЭС "НАШ МИР-XXI ВЕК"</p>
                    <strong>Игорь А.Алекс</strong>
                    <a href='tel:+79251586579'>+7 (925) 158-65-79</a>
                    <p>Разработчик</p>
                    <strong>Калашников Д.А.</strong>
                    <a href='tel:+79999152567'>+7 (999) 915-25-67</a>
                </div>
            </section>
            <div className='footer_confidently'>
                <a
                    href='https://xn-----7kc7aqdefshzj3d.xn--p1ai/page27721924.html'
                    target='_blank'
                    rel='noreferrer'>
                    Политика конфиденциальности
                </a>
            </div>
        </footer>
    );
};

export default Footer;
