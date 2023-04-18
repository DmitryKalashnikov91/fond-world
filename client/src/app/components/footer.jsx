import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer' id='contacts'>
            <div className='footer_logo d-flex flex-column'>
                <img
                    src='https://thumb.tildacdn.com/tild3232-3134-4133-a431-373835393739/-/resize/476x/-/format/webp/21__.png'
                    alt='logo'
                    width={200}
                    height={50}
                />
                <span className='text-light'>Сообщество VK </span>
                <a
                    href='https://vk.com/public218231687'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='fs-6'>
                    vk/фонд-наш-мир.рф
                </a>
                <p className='mt-5 pt-5'>Copyright &copy; 2023 | фонд-наш-мир.рф</p>
            </div>
            <section className='footer_content'>
                <span>
                    По вопросам сотрудничества:
                    <br />
                    <a href='mailto:info@org-nashmir.tech' className='fs-5'>
                        info@org-nashmir.tech
                    </a>
                </span>
                <div className='footer_contacts'>
                    <p className='mt-4'>Официальный представитель МФКЭС "НАШ МИР-XXI ВЕК"</p>
                    <span>Игорь А.Алекс </span>
                    <a href='tel:+79251586579'>+7 (925) 158-65-79</a>
                    <p className='mt-4'>Разработчик</p>
                    <span>Калашников Д.А. </span>
                    <a href='tel:+79999152567'>+7 (999) 915-25-67</a>
                </div>
            </section>
            <div className='footer_confidently'>
                <Link to={'confidency'}>Политика конфиденциальности</Link>
            </div>
        </footer>
    );
};

export default Footer;
