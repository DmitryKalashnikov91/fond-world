import Alert from 'react-bootstrap/Alert';
import parse from 'html-react-parser';
import newsPaperService from '../../../services/newsPaper.service';
import styles from './Newspapers.module.scss';
import { useState, useEffect } from 'react';
import { Loader } from '../../common/spinner/Loader';

const Newspapers = () => {
    const [showMore, setShowMore] = useState(false);
    const [newsPaper, setNewsPaper] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const req = await newsPaperService.get();
            setNewsPaper(req);
            setLoading(false);
        }
        fetchData();
    }, []);
    const filteredNews = newsPaper.filter((news, index) => (!showMore ? index < 4 : index >= 0));
    return (
        <>
            {!loading ? (
                <section className={styles.newspapers}>
                    {filteredNews.map((item) => (
                        <Alert
                            variant='info'
                            className={'main_box text-start ' + styles.newspapers_alert}
                            key={item._id}>
                            <div className={styles.newspapers_card__header}>
                                <strong>{parse(item.header)}</strong>
                                <a
                                    className='bg-light p-2'
                                    href={item.hyperlink}
                                    target='_blank'
                                    rel='noreferrer'>
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
                    <button className='mb-2' onClick={() => setShowMore(!showMore)}>
                        {!showMore ? (
                            <span className='text-light'>
                                Ещё статьи <i className='bi bi-arrow-down'></i>
                            </span>
                        ) : (
                            <span className='text-light'>
                                Свернуть <i className='bi bi-arrow-up'></i>
                            </span>
                        )}
                    </button>
                </section>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Newspapers;
