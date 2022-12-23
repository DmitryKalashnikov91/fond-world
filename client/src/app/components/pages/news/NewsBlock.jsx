import parse from 'html-react-parser';
import styles from './NewsBlock.module.scss';
import { NEWS } from './newsApi';
const NewsBlock = () => {
    return (
        <>
            <div className={styles.news_header}>
                <h2 className='text-danger'>Последние новости Фонда</h2>
            </div>
            <section className={styles.news}>
                {NEWS.map((item) => (
                    <div className={styles.news_block} key={item.id}>
                        <div className={styles.news_photo}>
                            <img src={item.photo} alt={item.alt} width={100} height='auto' />
                            <div className={styles.news_label}>{item.label}</div>
                            <div className={styles.news_date}>
                                <p>{item.date}</p>
                            </div>
                        </div>
                        <div className={styles.news_string}>
                            <span>{parse(item.content)}</span>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default NewsBlock;
