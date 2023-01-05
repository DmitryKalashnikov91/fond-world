import { nanoid } from 'nanoid';
import config from '../../../../../config.json';

const URL = config.urlImg;

export const posters = [
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fposter3.png?alt=media&token=6dd3f797-ae77-4f79-82ae-de54aec138f2`,
        alt: 'poster1',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fbiznessblock.jpeg?alt=media&token=0f5fd673-43a9-49f6-8907-e93f58bd3ef8`,
        alt: 'poster2',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fposter2.png?alt=media&token=788c1826-944e-4195-ae12-18ea5e87e473`,
        alt: 'poster3',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fdiz1209.jpeg?alt=media&token=b3353866-d703-499c-9d33-d15c066a0996`,
        alt: 'poster4',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Ffour2106.jpeg?alt=media&token=32233bb7-2db1-4666-98bf-120f9c364f55`,
        alt: 'poster5',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Ffow270922.jpeg?alt=media&token=725a97ff-cbb8-4854-a696-4483a8b9930f`,
        alt: 'poster6',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fgoldring120922.jpeg?alt=media&token=2edd19af-0844-4547-af58-c5131b2790e3`,
        alt: 'poster7',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fkinochas.jpeg?alt=media&token=89444513-ece5-4958-805d-3f3ba8428a34`,
        alt: 'poster8',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fpevcov.jpeg?alt=media&token=dabb54ed-a3fb-44a2-bd5b-fd3e437e10db`,
        alt: 'poster9',
    },
];
