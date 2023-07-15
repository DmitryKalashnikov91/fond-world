import parse from 'html-react-parser';
import Alert from 'react-bootstrap/Alert';
import newsService from '../../../services/news.service';
import styles from './NewsBlock.module.scss';
import { useState, useEffect } from 'react';
import { Loader } from '../../common/spinner/Loader';
const NewsBlock = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const req = await newsService.get();
            setNews(req);
            setLoading(false);
        }
        fetchData();
    }, []);
    return (
        <>
            <div className={styles.news_header}>
                <h2 className='text-danger'>Последние новости Фонда</h2>
            </div>

            {!loading ? (
                <section className={styles.news}>
                    {news.map((item) => (
                        <Alert variant='primary' key={item._id} className={styles.news_block}>
                            <div className={styles.news_photo}>
                                <img src={item.photo} alt={item.alt} width={100} height='auto' />
                                <div className={styles.news_label}>{item.label}</div>
                                <div className={styles.news_date}>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                            <div className={styles.news_string}>
                                <p>{parse(item.content)}</p>
                            </div>
                        </Alert>
                    ))}
                </section>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default NewsBlock;
