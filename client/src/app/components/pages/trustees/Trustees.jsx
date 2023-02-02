import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';

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
            <Row xs={1} md={4} className='g-2'>
                {trustees.map((trustee) => (
                    <Col key={trustee._id}>
                        <Card>
                            <Card.Img variant='top' src={trustee.imgSrc} className='p-2' />
                            <Card.Body>
                                <Card.Title>{trustee.name}</Card.Title>
                                <Card.Text>{parse(trustee.caption)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Trustees;
