import parse from 'html-react-parser';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import facesService from '../../../services/faces.service';
import styles from './Faces.module.scss';
import { Loader } from '../../common/spinner/Loader';

const Faces = () => {
    const otherFaces = [
        {
            id: nanoid(8),
            name: 'Инна Мальцева',
        },
        {
            id: nanoid(8),
            name: 'Мария Левина',
        },
        {
            id: nanoid(8),
            name: 'Роман Лосев',
        },
        {
            id: nanoid(8),
            name: 'Ангелина Попова',
        },
        {
            id: nanoid(8),
            name: 'Алексей Квашнин',
        },
        {
            id: nanoid(8),
            name: 'Александр Айгистов',
        },
        {
            id: nanoid(8),
            name: 'Сергей Кулаков',
        },
        {
            id: nanoid(8),
            name: 'Екатерина Семенкова',
        },
        {
            id: nanoid(8),
            name: 'Ирина Яшина',
        },
        {
            id: nanoid(8),
            name: 'Елена Лисина',
        },
    ];
    const [faces, setFaces] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const req = await facesService.get();
            setFaces(req);
            setLoading(false);
        }
        fetchData();
    }, []);
    return (
        <>
            {!loading ? (
                <div className={styles.Faces}>
                    <h2 className={styles.Faces_head}>Наша команда</h2>
                    <ul className={styles.Faces_items}>
                        {faces.map((face) => (
                            <li key={face._id}>
                                <div className={styles.Faces_items__block}>
                                    <img src={face.imgSrc} alt={face.alt} width={160} />
                                    <h4 className=''>{face.name}</h4>
                                    <div className={styles.Faces_items__block___text}>
                                        <span>{parse(face.role)}</span>
                                        <p>
                                            <a href={`mailto:${face.mail}`}>{face.mail}</a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <span className='ms-5'>А также в составе команды:</span>
                    <ul className={styles.Faces_other}>
                        {otherFaces.map(({ id, name }) => (
                            <li key={id}>{name}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Faces;
