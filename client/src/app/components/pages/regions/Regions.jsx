import parse from 'html-react-parser';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import styles from './Regions.module.scss';
import { regionsPresent } from './RegionsPresents';

const Regions = () => {
    const [state, setState] = useState(false);
    console.log(regionsPresent);
    return (
        <section className={styles.Regions}>
            {regionsPresent.map((represent) => (
                <Alert variant='danger' className={styles.Regions_Alert}>
                    <div className={styles.Regions_Alert__avatar}>
                        <img src={represent.avatar} alt={represent.name} />
                    </div>
                    <div className={styles.Regions_Alert__caption}>
                        <strong>{represent.name}</strong>
                        <a href={`tel:${represent.phoneHref}`}>{represent.phone}</a>
                        <span>{parse(represent.contentShow)}</span>
                    </div>

                    {state && <span>{parse(represent.contentHide)}</span>}
                    <button className='btn btn-outline-primary' onClick={() => setState(!state)}>
                        {state ? 'свернуть' : 'далее...'}
                    </button>
                </Alert>
            ))}
        </section>
    );
};

export default Regions;
