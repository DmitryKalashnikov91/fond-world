import Alert from 'react-bootstrap/Alert';
import styles from './Poems.module.scss';
import parse from 'html-react-parser';
import poems from './poemsMock/poems.json';
import { useState } from 'react';

const PoemsBlock = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <section className={styles.poems}>
            {poems.map((poem, i) => (
                <Alert variant={poem.variant} key={poem.id}>
                    <div className={styles.poems_avatar}>
                        <img src={poem.avatar} alt={poem.alt} width={100} />
                        <strong>{poem.autor}</strong>
                        <div className={styles.poems_content}>
                            <span>{parse(poem.content1)}</span>
                            {showMore && (
                                <>
                                    <span>{parse(poem.content2)}</span>
                                    {poem.content3 && <span>{parse(poem.content3)}</span>}
                                </>
                            )}
                            <button
                                className='btn btn-outline-info'
                                onClick={() => setShowMore(!showMore)}>
                                {!showMore ? 'ещё стихи...' : 'свернуть'}
                            </button>
                        </div>
                    </div>
                </Alert>
            ))}
        </section>
    );
};

export default PoemsBlock;
