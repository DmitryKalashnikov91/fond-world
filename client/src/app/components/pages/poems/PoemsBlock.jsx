import Attention from '../../common/Attention';
import styles from './Poems.module.scss';

const PoemsBlock = () => {
    return (
        <div className={styles.poems}>
            <Attention />
        </div>
    );
};

export default PoemsBlock;
