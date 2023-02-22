import Alert from 'react-bootstrap/Alert';
import parse from 'html-react-parser';
import newsPaperService from '../../../services/newsPaper.service';
import styles from './Newspapers.module.scss';
import { useState, useEffect } from 'react';

const Newspapers = () => {
    const [showMore, setShowMore] = useState(false);
    const [newsPaper, setNewsPaper] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await newsPaperService.get();
            setNewsPaper(req);
        }
        fetchData();
    }, []);
    const filteredNews = newsPaper.filter((news, index) => (!showMore ? index < 4 : index >= 0));
    return (
        <section className={styles.newspapers}>
            {filteredNews.map((item) => (
                <Alert variant='secondary' className={styles.newspapers_card} key={item._id}>
                    <div className={styles.newspapers_card__header}>
                        <strong>{parse(item.header)}</strong>
                        <a href={item.hyperlink} target='_blank' rel='noreferrer'>
                            {parse(item.title)}
                        </a>
                    </div>

                    <div className={styles.newspapers_card__content}>
                        <span>{parse(item.content)}</span>
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
    );
};

export default Newspapers;
