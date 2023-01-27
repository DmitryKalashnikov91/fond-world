import Attention from '../../common/Attention';
import styles from './Faces.module.scss';

const Faces = () => {
    return (
        <div className={styles.Faces}>
            <Attention />
            <ul>
                <li>Игорь А. Алекс</li>
                <li>Дмитрий Певцов</li>
                <li>Тимофей Аникин</li>
                <li>Кирилл Игнатов</li>
                <li>Екатерина Кириенко</li>
                <li>Дмитрий Калашников</li>
                <li>Надежда Крекшина</li>
                <li>Елена Лисина</li>
                <li>Елена Кичаева</li>
                <li>Лариса Солнечная</li>
            </ul>
        </div>
    );
};

export default Faces;
