import Alert from 'react-bootstrap/Alert';
import parse from 'html-react-parser';
import newsPaperService from '../../../services/newsPaper.service';
import styles from './Newspapers.module.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../common/spinner/Loader';

const NewsMobile = () => {
    const [newsPaper, setNewsPaper] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
            const req = await newsPaperService.get();
            setNewsPaper(req);
            setLoading(false);
        }
        fetchData();
    }, []);
    const filteredNews = newsPaper.filter((news, index) => index < 2);
    return (
        <>
            {!loading ? (
                <section className={styles.newspapers}>
                    <h3 className='mt-5'>СМИ о нас:</h3>
                    {filteredNews.map((item) => (
                        <Alert className='main_box' key={item._id}>
                            <div className={styles.newspapers_card__header}>
                                <strong>{parse(item.header)}</strong>
                                <a href={item.hyperlink} target='_blank' rel='noreferrer'>
                                    {parse(item.title)}
                                </a>
                            </div>

                            <div className={styles.newspapers_card__content}>
                                <span className='text-light'>{parse(item.content)}</span>
                                <button className='btn btn-outline-primary'>
                                    <a
                                        className='text-danger'
                                        href={item.linkToItem}
                                        target='_blank'
                                        rel='noreferrer'>
                                        Читать статью
                                    </a>
                                </button>
                            </div>
                        </Alert>
                    ))}
                    <button onClick={() => navigate('/newspapers')}>Все статьи</button>
                </section>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default NewsMobile;
