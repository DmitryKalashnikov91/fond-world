import { nanoid } from 'nanoid';
import config from '../../../../../config.json';

const URL = config.urlImg;

export const posters = [
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fanimated.webp?alt=media&token=5bc03a14-5f8c-49a8-ae22-f9750da9fa3f`,
        alt: 'poster1',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fposter3.png?alt=media&token=291cfb06-874a-439d-a67e-0db405507ada`,
        alt: 'poster1',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fpevcov.jpeg?alt=media&token=3fa8a82c-c3a6-4f7d-81aa-2e8c04bb1975`,
        alt: 'poster2',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fbiznessblock.jpeg?alt=media&token=c59f6530-1eb8-4359-8dd1-6180b7fa9610`,
        alt: 'poster3',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Ffour2106.jpeg?alt=media&token=2c7d5048-1f9d-4a92-9fcc-76b0551d07bb`,
        alt: 'poster4',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fkinochas.jpeg?alt=media&token=b2760cc6-df30-4c3d-a678-1eaaa278e8c5`,
        alt: 'poster5',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fposter2.png?alt=media&token=146384b2-858e-4224-abb2-6706d93d8f30`,
        alt: 'poster8',
    },
    {
        id: nanoid(8),
        posterSrc: `${URL}posters%2Fgoldring120922.jpeg?alt=media&token=0f6e2ee0-24cd-4b87-b3f7-3a1a6447d96c`,
        alt: 'poster9',
    },
];
