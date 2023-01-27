import parse from 'html-react-parser';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import styles from './Regions.module.scss';
import { regionsPresent } from './RegionsPresents';

const Regions = () => {
    const [state, setState] = useState(false);
    return (
        <section className={styles.Regions}>
            {regionsPresent.map((represent) => (
                <Alert
                    variant={represent.variant}
                    className={styles.Regions_Alert}
                    key={represent.id}>
                    <div className={styles.Regions_Alert__avatar}>
                        {represent?.avatar && <img src={represent.avatar} alt={represent.name} />}
                        <strong>{represent.city}</strong>
                    </div>
                    <div className={styles.Regions_Alert__caption}>
                        <strong>{represent.name}</strong>
                        <a href={`tel:${represent.phoneHref}`}>{represent.phone}</a>
                        <span>{parse(represent.contentShow)}</span>
                    </div>

                    {state && <span>{parse(represent.contentHide)}</span>}
                    {represent?.contentHide && (
                        <button
                            className='btn btn-outline-primary'
                            onClick={() => setState(!state)}>
                            {state ? 'свернуть' : 'далее...'}
                        </button>
                    )}
                </Alert>
            ))}
        </section>
    );
};

export default Regions;
