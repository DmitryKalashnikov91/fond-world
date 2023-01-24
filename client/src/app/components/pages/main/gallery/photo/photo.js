import config from '../../../../../config.json';
import { nanoid } from 'nanoid';

const URL = config.urlImg;

export const PHOTOS = [
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_1.webp?alt=media&token=cfd07fba-148e-49a6-886e-8b1fe3bf3f6b`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_16.webp?alt=media&token=b86c3023-9e1a-46bc-9ea7-6114f28f966f`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_17.webp?alt=media&token=0dbf678d-e762-4a69-b5e1-ff6f229a9e4c`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_4.webp?alt=media&token=080d01f9-f693-42d9-a310-5342614bceff`,
    },

    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_5.webp?alt=media&token=855f0f83-b413-4ae5-989e-4ec019a15f66`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_6.webp?alt=media&token=d0a21d4b-133a-4e26-af43-4364ec16b4c3`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_7.webp?alt=media&token=2a6d1e4c-00c1-4ebd-bd6d-2f6036ebdef7`,
    },

    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_8.webp?alt=media&token=190115ac-792a-441b-8de8-fc3816fdb283`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2Fforum14_12_22.webp?alt=media&token=adf48c9a-93f4-40ac-9181-71e81eb6829b`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_2.webp?alt=media&token=283c8c7e-a5e9-482f-8fe0-b55272958f67`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_3.webp?alt=media&token=ea2cca9a-98f9-4696-b455-d8cee989662f`,
    },
];
