import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import parse from 'html-react-parser';
import { trusteesData } from './trusteesData/trusteesData';

import styles from './Trustees.module.scss';

const Trustees = () => {
    return (
        <div className={styles.Trustees}>
            <Row xs={1} md={4} className='g-2'>
                {trusteesData.map((trustee) => (
                    <Col key={trustee.id}>
                        <Card>
                            <Card.Img variant='top' src={trustee.imgSrc} className='p-2' />
                            <Card.Body>
                                <Card.Title>{trustee.name}</Card.Title>
                                <Card.Text>{parse(trustee.cuption)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Trustees;
