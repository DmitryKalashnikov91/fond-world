import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import regionsService from '../../../services/regions.service';
import styles from './Regions.module.scss';

const Regions = () => {
    const [state, setState] = useState(false);
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await regionsService.get();
            setRegions(req);
        }
        fetchData();
    }, []);
    return (
        <section className={styles.Regions}>
            <div className='text-center mb-3'>
                <h2>Наши представители в регионах</h2>
            </div>
            {regions.map((represent) => (
                <Alert
                    variant={represent.variant}
                    className={styles.Regions_Alert}
                    key={represent._id}>
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
