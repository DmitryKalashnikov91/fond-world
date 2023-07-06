import Alert from 'react-bootstrap/Alert';
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPoems, loadPoemsList } from '../../../../redux/slices/poemsSlice';

import styles from './Poems.module.scss';

const PoemsBlock = () => {
    const [showMore, setShowMore] = useState(false);
    const dispatch = useDispatch();
    const poems = useSelector(getPoems());

    useEffect(() => {
        dispatch(loadPoemsList());
    }, [dispatch]);

    const addShowClass = (e) => {
        setShowMore((prev) => !prev);
        e.target.textContent = showMore ? `< свернуть` : 'ещё... >';
        for (let i = 1; i < 4; i++) {
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
            {poems?.map((poem, i) => (
                <Alert variant={poem.variant} key={poem._id} className={styles.poems_alert}>
                    <div className={styles.poems_avatar}>
                        <img src={poem.avatar} alt={poem.author} width={100} />
                        <strong>{poem.author}</strong>
                        <div className={styles.poems_content}>
                            <span>{parse(poem.content1)}</span>
                            <span className='hide'>{parse(poem.content2)}</span>
                            {poem.content3 && <span className='hide'>{parse(poem.content3)}</span>}
                            {poem.content4 && <span className='hide'>{parse(poem.content4)}</span>}
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
