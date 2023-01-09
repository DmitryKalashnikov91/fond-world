import React, { useEffect, useState } from 'react';
import { RxDoubleArrowUp } from 'react-icons/rx';

export const UpButton = () => {
    const [scrollTop, setScrollTop] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 250) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            {scrollTop ? (
                <button className='arrow-up' onClick={scrollUp}>
                    <RxDoubleArrowUp size={'2em'} color='blue' />
                </button>
            ) : null}
        </>
    );
};
