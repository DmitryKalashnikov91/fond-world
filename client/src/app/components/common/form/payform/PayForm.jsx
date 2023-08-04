import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Attention from '../../Attention';
import styles from './PayForm.module.scss';

const PayForm = () => {
    return (
        <div className={styles.PayForm}>
            <Attention />
            <h2 className='text-light'>
                Главный партнер{' '}
                <a href='http://https://www.psbank.ru/' target='_blank' rel='noopener noreferrer'>
                    ПАО "Промсвязьбанк"{' '}
                    <img
                        src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logos%2FPSB_logo_white_png%20(1).png?alt=media&token=162413e0-fd83-40f6-b8e3-6fad219321a2'
                        alt='ПСБ'
                        width={200}
                    />
                </a>
            </h2>
            <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email адресс</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                    <Form.Text className='text-muted'>
                        Мы никогда не будем делиться вашей электронной почтой с кем-либо еще
                    </Form.Text>
                </Form.Group>
                <Form.Select aria-label='Default select example'>
                    <option>Выбрать сумму</option>
                    <option value='1' className='text-danger'>
                        100
                    </option>
                    <option value='2' className='text-warning'>
                        200
                    </option>
                    <option value='3' className='text-primary'>
                        500
                    </option>
                    <option value='4' className='text-success'>
                        1000
                    </option>
                    <option value='5'>Другая сумма...</option>
                </Form.Select>
                <Button variant='primary' type='submit' className='mt-3'>
                    Оплата
                </Button>
            </Form>
        </div>
    );
};

export default PayForm;
