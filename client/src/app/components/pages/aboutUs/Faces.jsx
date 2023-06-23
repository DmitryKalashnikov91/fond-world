import { nanoid } from 'nanoid';
import Attention from '../../common/Attention';
import styles from './Faces.module.scss';
import parse from 'html-react-parser';

const facesData = [
    {
        id: nanoid(8),
        name: 'Игорь А.Алекс',
        role: 'Главный продюсер и инициатор фонда &quot;Наш Мир 21 век&quot;',
        mail: 'info@org-nashmir.tech',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/trustees%2FAAlex.webp?alt=media&token=166ef9ca-5023-4869-9232-5a8ad205c1d4',
        alt: 'Игорь А.Алекс',
    },
    {
        id: nanoid(8),
        name: 'Мурадуллаев Рустам Сабирович',
        role: 'Соорганизатор и попечитель фонда',
        mail: 'snic2004@mail.ru',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/trustees%2FRustam.webp?alt=media&token=5156960b-80bd-49f8-9f25-f80915d46a10',
        alt: 'Мурадуллаев Р.С.',
    },
    {
        id: nanoid(8),
        name: 'Сивохин Виктор Михайлович',
        role: 'Соорганизатор акций и форумов',
        mail: '',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/avatars%2FSivohinVM.webp?alt=media&token=d26f5018-1582-408f-9384-c48d1fda0779',
        alt: 'Сивохин В.М.',
    },
    {
        id: nanoid(8),
        name: 'Лариса Солнечная',
        role: 'Художественный руководитель благотворительных мероприятий',
        mail: '',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/avatars%2Fsolnechnaya.webp?alt=media&token=08dd89a7-d6d4-4f3d-b54e-88253cd38020',
        alt: 'Солнечная Лариса',
    },

    {
        id: nanoid(8),
        name: 'Калашников Дмитрий Александрович',
        role: 'Заместитель главного продюсера, руководитель службы IT',
        mail: 'dmitrynashmir@gmail.com',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/trustees%2FKalashDM.webp?alt=media&token=fc07fb14-3165-47ba-a5b5-e3d332d3e161',
        alt: 'Калашников Д.А.',
    },
];

const Faces = () => {
    return (
        <div className={styles.Faces}>
            <Attention />
            <h2 className={styles.Faces_head}>Наша команда</h2>
            <ul className={styles.Faces_items}>
                {facesData.map((face) => (
                    <li key={face.id}>
                        <div className={styles.Faces_items__block}>
                            <img src={face.imgSrc} alt={face.alt} width={160} />
                            <h4 className='pt-5'>{face.name}</h4>
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
