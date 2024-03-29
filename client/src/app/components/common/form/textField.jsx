import PropTypes from 'prop-types';
import { useState } from 'react';

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    const getInputClasses = () => {
        return 'form-control' + (error ? ' is-invalid' : '');
    };
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className='mb-4'>
            <label className='text-light' htmlFor={name}>
                {label}
            </label>
            <div className='input-group has-validation'>
                <input
                    type={showPassword ? 'text' : type}
                    id={name}
                    value={value}
                    onChange={onChange}
                    name={name}
                    className={getInputClasses()}
                />
                {type === 'password' && (
                    <button
                        className='btn btn-outline-secondary'
                        type='button'
                        id='button-addon2'
                        onClick={toggleShowPassword}>
                        <i className={'bi bi-eye' + (showPassword ? '-slash' : '')}></i>
                    </button>
                )}
                {error && <div className='invalid-feedback'>{error}</div>}
            </div>
        </div>
    );
};
TextField.defaultProps = {
    type: 'text',
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
};

export default TextField;
