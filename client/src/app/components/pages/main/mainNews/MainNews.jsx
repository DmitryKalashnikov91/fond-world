import Card from 'react-bootstrap/Card';
import styles from './MainNews.module.scss';

const MainNews = () => {
    return (
        <div className={styles.MainNews}>
            <Card className='bg-dark text-light mt-5 fs'>
                <Card.Img
                    src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/gallery%2Fezgif.com-gif-maker%20(5).webp?alt=media&token=ecf80e5e-c592-4473-bd84-1176c650b89f'
                    alt='Card image'
                />
                <Card.ImgOverlay>
                    <Card.Title>
                        <h1 className='text-light text-center'>ДМИТРИЙ ПЕВЦОВ И "ДЕТИ ДОНБАССА"</h1>
                    </Card.Title>
                    <Card.Text className={styles.MainNews_content}>
                        Народный артист России, депутат Государственной Думы РФ (фракция "Новые
                        люди") стал лицом проекта и попечителем Всероссийской благотворительной
                        акции "Установка скульптурных групп и монументов "Дети Донбасса" и "Героям
                        России"... Источник:{' '}
                        <Card.Link
                            href='https://xn--b1agj9af.xn--80adxhks/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Вести.Москва
                        </Card.Link>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default MainNews;
