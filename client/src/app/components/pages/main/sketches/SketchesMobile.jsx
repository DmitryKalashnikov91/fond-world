import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import sketchesService from '../../../../services/sketches.service';
import { useNavigate } from 'react-router-dom';

const SketchesMobile = () => {
    const [sketches, setSketches] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
            const req = await sketchesService.get();
            setSketches(req);
        }
        fetchData();
    }, []);
    return (
        <div className='mt-5'>
            <h1 className=' pt-5 text-center'>Эскизы и скульптурные группы </h1>
            {sketches ? (
                <Row xs={1} md={4} className='g-2 mt-5'>
                    {sketches.map((sketch) => (
                        <Col key={sketch._id}>
                            <Card>
                                <Card.Img
                                    variant='top'
                                    src={sketch.imgSrc}
                                    className='ps-5 pt-2'
                                    alt={sketch.alt}
                                    style={{ width: '300px' }}
                                />
                                <Card.Body>
                                    {/* <Card.Title>{sketch.name}</Card.Title> */}
                                    <Card.Text>{sketch.caption}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <Spinner animation='border' variant='warning' />
            )}
            <button className='btn btn-primary mt-2 w-50' onClick={() => navigate('/')}>
                На главную
            </button>
        </div>
    );
};

export default SketchesMobile;
