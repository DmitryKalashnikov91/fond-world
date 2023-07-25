import { Logos } from './logos';
import styles from './Marquee.module.scss';

export const Marquee = () => {
    return (
        <div className={styles.Marquee}>
            <div className={styles.Marquee_track}>
                <div className={styles.Marquee_track__content}>
                    {Logos.map((logo) => (
                        <img key={logo.id} src={logo.url} alt={logo.alt} width={150} />
                    ))}
                </div>
            </div>
        </div>
    );
};
