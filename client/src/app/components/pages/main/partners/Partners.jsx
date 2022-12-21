import dorogov from './avatars/dorogov.png';
import karaulov from './avatars/karaulov.png';
import konoplyannikov from './avatars/konoplyannikovuv.png';
import chebotina from './avatars/lyusya-chebotina.png';
import nelezin from './avatars/nelezin.webp';
import rahilchuk from './avatars/rahilchuk.png';
import rapoport from './avatars/rapoport.png';
import safronovi from './avatars/safronovi.png';
import savin from './avatars/savinandaleksandrov.png';
import shumilova from './avatars/shumilovaeb.png';
import shumilov from './avatars/shumilovlv.png';
import udalov from './avatars/udalovs.png';
import yandiev from './avatars/yandievmi.png';

const Partners = () => {
    const avatars = [
        {
            id: 1,
            imgSrc: dorogov,
            name: 'Дорогов П. И., Председатель антикоррупционного комитета',
        },
        {
            id: 2,
            imgSrc: karaulov,
            name: 'Игорь Караулов, поэт, общественный деятель',
        },
        {
            id: 3,
            imgSrc: konoplyannikov,
            name: 'Коноплянников Ю. В.,  заслуженный работник культуры РФ',
        },
        {
            id: 4,
            imgSrc: chebotina,
            name: 'Люся Чеботина, российская певица',
        },
        {
            id: 5,
            imgSrc: nelezin,
            name: 'Нелезин П.В.,  генерал-полковник',
        },
        {
            id: 6,
            imgSrc: rahilchuk,
            name: 'Андрей Рахильчук, генерал-майор казачьих войск',
        },
        {
            id: 7,
            imgSrc: rapoport,
            name: 'Александр Рапопорт, российский актер театра и кино',
        },
        {
            id: 8,
            imgSrc: safronovi,
            name: 'Братья Сафроновы,  российские иллюзионисты',
        },
        {
            id: 9,
            imgSrc: savin,
            name: 'Александр Савин, заслуженный артист РФ',
        },
        {
            id: 10,
            imgSrc: shumilova,
            name: 'Шумилова Елена Борисовна,  сенатор Совета Федерации',
        },
        {
            id: 11,
            imgSrc: shumilov,
            name: 'Шумилов Л.В., генерал-полковник',
        },
        {
            id: 12,
            imgSrc: udalov,
            name: 'Сергей Удалов, генеральный директор газеты "Президент',
        },
        {
            id: 13,
            imgSrc: yandiev,
            name: 'Яндиев М.И,  депутат Мосгордумы',
        },
    ];
    return (
        <div>
            <div className='box_img'>
                {avatars.map(({ id, imgSrc, name }) => (
                    <div className='img' key={id}>
                        <img src={imgSrc} alt={name} width='280' height='300' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
