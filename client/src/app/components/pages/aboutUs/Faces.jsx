import styles from './Faces.module.scss';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import facesService from '../../../services/faces.service';

const Faces = () => {
    const [faces, setFaces] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await facesService.get();
            setFaces(req);
        }
        fetchData();
    }, []);
    return (
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
        </div>
    );
};

export default Faces;
