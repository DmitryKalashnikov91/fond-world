import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';

import parse from 'html-react-parser';
import trusteesService from '../../../services/trustees.service';

import styles from './Trustees.module.scss';
import { Loader } from '../../common/spinner/Loader';

const Trustees = () => {
    const [trustees, setTrustees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const req = await trusteesService.get();
            setTrustees(req);
            setLoading(false);
        }
        fetchData();
    }, []);
    return (
        <>
            {!loading ? (
                <div className={styles.Trustees}>
                    <div className='text-center mb-3'>
                        <h2>Наши попечители</h2>
                        <span>Главные лица, поддерживающие Наши проекты.</span>
                    </div>
                    <Row xs={1} md={4} className='g-2'>
                        {trustees.map((trustee) => (
                            <Col key={trustee._id}>
                                <Card
                                    variant='none'
                                    className={styles.Trustees_card}
                                    border='primary'>
                                    <div className={styles.Trustees_border}>
                                        <Card.Img
                                            variant='top'
                                            src={trustee.imgSrc}
                                            className='p-2'
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='text-primary'>
                                            {trustee.name}
                                        </Card.Title>
                                        <Card.Text className='text-light'>
                                            {parse(trustee.caption)}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Trustees;
