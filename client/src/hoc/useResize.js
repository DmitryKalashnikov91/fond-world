import { useState, useEffect } from 'react';
import { SCREEN_MD } from './consts-breakpoints';

export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return {
        width,
        isScreenMd: width >= SCREEN_MD,
    };
};
