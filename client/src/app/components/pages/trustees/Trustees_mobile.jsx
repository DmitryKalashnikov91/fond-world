import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import parse from 'html-react-parser';
import trusteesService from '../../../services/trustees.service';

import { useNavigate } from 'react-router-dom';

const Trustees_mobile = () => {
    const [trustees, setTrustees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const req = await trusteesService.get();
            setTrustees(req);
        }
        fetchData();
    }, []);
    const filteredTrustees = trustees.filter((trustee, index) => index < 2);
    return (
        <div className='container mt-5'>
            <h3>Наши попечители:</h3>
            {trustees ? (
                <Row xs={1} md={4} className='g-2'>
                    {filteredTrustees.map((trustee) => (
                        <Col key={trustee._id}>
                            <Card>
                                <Card.Img variant='top' src={trustee.imgSrc} className='p-3' />
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
            <button className='btn btn-primary w-60 mt-4' onClick={() => navigate('trustees')}>
                Все попечители
            </button>
        </div>
    );
};

export default Trustees_mobile;
