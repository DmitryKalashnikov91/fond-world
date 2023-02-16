import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validator } from '../../../../utils/validator';
import TextField from '../../common/form/textField';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../../redux/slices/userSlice';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
        name: '',
        lastName: '',
    });
    const [errors, setErrors] = useState({});
    const validatorConfig = {
        email: {
            isRequired: { message: 'Эл. почта обязательна для заполнения' },
            isEmail: { message: 'Email введен некорректно' },
        },
        password: {
            isRequired: { message: 'Пароль обязателен для заполнения' },
            isCapitalSymbol: { message: 'Пароль должен содержать хотя бы одну заглавную букву' },
            isContainDigit: { message: 'Пароль должен иметь хотя бы одно число' },
            min: { message: 'Пароль должен содержать минимум 8 знаков', value: 8 },
        },
        name: {
            isRequired: {
                message: 'Обязательно нужно указать имя',
            },
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(signUp(data));
        navigate('/');
    };
    const isValid = Object.keys(errors).length === 0;
    return (
        <div className=''>
            <h3 className='mb-4'>Регистрация</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    label='Ваше имя*'
                    name='name'
                    value={data.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <TextField
                    label='Фамилия'
                    name='lastName'
                    value={data.lastName}
                    onChange={handleChange}
                />
                <TextField
                    label='Эл. почта*'
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    label='Пароль*'
                    type='password'
                    name='password'
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                />

                <p className='mt-2'>
                    Уже есть аккаунт? <Link to={'/auth/login'}>Войти</Link>
                </p>
                <button type='submit' className='btn btn-primary w-100 mx-auto' disabled={!isValid}>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
