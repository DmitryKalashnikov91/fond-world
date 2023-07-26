import { Logos } from './logos';
import Marquee from 'react-fast-marquee';
import styles from './MarqLogos.module.scss';

export const MarqLogos = () => {
    return (
        <>
            <Marquee>
                <div className={styles.Logos}>
                    {Logos.map((logo) => (
                        <img key={logo.id} src={logo.url} alt={logo.alt} width={150} />
                    ))}
                </div>
            </Marquee>
        </>
    );
};
