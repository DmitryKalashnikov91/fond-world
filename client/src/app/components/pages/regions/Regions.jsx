import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import regionsService from '../../../services/regions.service';
import styles from './Regions.module.scss';
import { Loader } from '../../common/spinner/Loader';

const Regions = () => {
    const [state, setState] = useState(false);
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const req = await regionsService.get();
            setRegions(req);
            setLoading(false);
        }
        fetchData();
    }, []);
    return (
        <>
            {!loading ? (
                <section className={styles.Regions}>
                    <div className='text-center mb-3'>
                        <h2>Наши представители в регионах</h2>
                    </div>
                    {regions.map((represent) => (
                        <Alert
                            variant='none'
                            className={styles.Regions_Alert + ' border border-primary'}
                            key={represent._id}>
                            <div className={styles.Regions_Alert__avatar}>
                                {represent?.avatar && (
                                    <img src={represent.avatar} alt={represent.name} />
                                )}
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
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Regions;
