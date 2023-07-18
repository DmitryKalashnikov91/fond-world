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
                <p className='pt-5'>фонд-наш-мир.рф &copy; | 2023</p>
            </div>
            <section className='footer_content'>
                <span>
                    Общие сведения
                    <br />
                    <p>
                        <strong>Полное наименование организации: </strong>
                        БЛАГОТВОРИТЕЛЬНЫЙ ФОНД СОХРАНЕНИЯ ПАМЯТИ ПОКОЛЕНИЙ "НАШ МИР - 21 ВЕК"
                    </p>
                    <p>
                        <strong>ИНН:</strong> 9728097957 (регион получения ИНН – Москва)
                    </p>
                </span>
                <div className='footer_contacts'>
                    <p className='mt-4'>Генеральный продюсер</p>
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
