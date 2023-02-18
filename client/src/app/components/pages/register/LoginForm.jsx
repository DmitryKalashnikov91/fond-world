import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuthErrors, login } from '../../../../redux/slices/userSlice';
import { validator } from '../../../../utils/validator';
import TextField from '../../common/form/textField';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const loginError = useSelector(getAuthErrors());
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const validatorConfig = {
        email: {
            isRequired: { message: 'Эл. рочта обязательна для заполнения' },
            isEmail: { message: 'Email введен некорректно' },
        },
        password: {
            isRequired: { message: 'Пароль обязателен для заполнения' },
            isCapitalSymbol: { message: 'Пароль должен содержать хотя бы одну заглавную букву' },
            isContainDigit: { message: 'Пароль должен иметь хотя бы одно число' },
            min: { message: 'Пароль должен содержать минимум 8 знаков', value: 8 },
        },
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    useEffect(() => {
        validate();
    }, [data]);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        dispatch(login({ payload: data }));
        navigate('/profile');
    };
    const isValid = Object.keys(errors).length === 0;

    return (
        <>
            <h3 className='mb-4'>Вход</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    label='Эл. почта'
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    label='Пароль'
                    type='password'
                    name='password'
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                {loginError && <p className='text-danger'>{loginError}</p>}
                <p>
                    Ещё не регистрировались? <Link to={'/auth/signup'}>Зарегистрироваться</Link>
                </p>
                <button className='btn btn-primary w-100 mx-auto' disabled={!isValid}>
                    Войти
                </button>
            </form>
        </>
    );
};

export default LoginForm;
