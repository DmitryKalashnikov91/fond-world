import Alert from 'react-bootstrap/Alert';
import styles from './Poems.module.scss';
import parse from 'html-react-parser';
import { useState } from 'react';
import { useEffect } from 'react';
import poemService from '../../../services/poem.servise';

const PoemsBlock = () => {
    const [showMore, setShowMore] = useState(false);
    const [poemes, setPoemes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await poemService.get();
            setPoemes(req);
        }
        fetchData();
    }, []);

    const addShowClass = (e) => {
        setShowMore((prev) => !prev);
        e.target.textContent = showMore ? `< свернуть` : 'ещё... >';
        for (let i = 1; i < 3; i++) {
            let currentPoemsSpan = e.target.offsetParent.children[0].childNodes[2].children[i];
            if (showMore) {
                currentPoemsSpan.classList.add('show');
            } else {
                currentPoemsSpan.classList.remove('show');
            }
        }
    };

    return (
        <section className={styles.poems}>
            {poemes.map((poem, i) => (
                <Alert variant={poem.variant} key={poem._id}>
                    <div className={styles.poems_avatar}>
                        <img src={poem.avatar} alt={poem.author} width={100} />
                        <strong>{poem.author}</strong>
                        <div className={styles.poems_content}>
                            <span>{parse(poem.content1)}</span>
                            <span className='hide'>{parse(poem.content2)}</span>
                            {poem.content3 && <span className='hide'>{parse(poem.content3)}</span>}
                            <button className='btn btn-outline-info' onClick={addShowClass}>
                                {'>'}
                            </button>
                        </div>
                    </div>
                </Alert>
            ))}
        </section>
    );
};

export default PoemsBlock;
