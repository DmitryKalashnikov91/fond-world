import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './VideoBlock.module.scss';

const VideoBlock = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <div className={styles.videoBlock} ref={ref}>
            {inView ? (
                <section className={styles.media}>
                    <div className={styles.media_frame}>
                        <iframe
                            src='https://www.youtube.com/embed/qov3m2gZZ_s'
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowFullScreen></iframe>
                    </div>
                    <div className={styles.media_frame}>
                        <iframe
                            src='https://www.youtube.com/embed/JHsFAEmA7Do'
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen></iframe>
                    </div>
                    <div className={styles.media_frame}>
                        <iframe
                            src='https://www.youtube.com/embed/EYProajMbhc'
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen></iframe>
                    </div>
                    <div className={styles.media_frame}>
                        <iframe
                            src='https://www.youtube.com/embed/adNSEoq000Q'
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen></iframe>
                    </div>
                    <div className={styles.media_frame}>
                        <iframe
                            src='https://www.youtube.com/embed/86R23o65cHA'
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen></iframe>
                    </div>
                </section>
            ) : (
                <section className={styles.skeleton}></section>
            )}
        </div>
    );
};

export default VideoBlock;
