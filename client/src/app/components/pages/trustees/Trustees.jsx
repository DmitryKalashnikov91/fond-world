import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import parse from 'html-react-parser';
import trusteesService from '../../../services/trustees.service';

import styles from './Trustees.module.scss';

const Trustees = () => {
    const [trustees, setTrustees] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await trusteesService.get();
            setTrustees(req);
        }
        fetchData();
    }, []);
    return (
        <div className={styles.Trustees}>
            <div className='text-center mb-3'>
                <h2>Наши попечители</h2>
                <span>Главные лица, поддерживающие Наши проекты.</span>
            </div>
            {trustees ? (
                <Row xs={1} md={4} className='g-2'>
                    {trustees.map((trustee) => (
                        <Col key={trustee._id}>
                            <Card className={styles.Trustees_card}>
                                <div className={styles.Trustees_border}>
                                    <Card.Img variant='top' src={trustee.imgSrc} className='p-2' />
                                </div>
                                <Card.Body>
                                    <Card.Title>{trustee.name}</Card.Title>
                                    <Card.Text>{parse(trustee.caption)}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <Spinner animation='border' variant='warning' />
            )}
        </div>
    );
};

export default Trustees;
