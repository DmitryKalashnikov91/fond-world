import config from '../../../../../config.json';
import { nanoid } from 'nanoid';

const URL = config.urlImg;

export const PHOTOS = [
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_1.webp?alt=media&token=655dd197-be32-4f43-817e-29cfe0ff00b3`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_2.webp?alt=media&token=60010e70-b528-463c-b05f-30b1d22c2677`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_3.webp?alt=media&token=e4184485-5128-4e08-ae0e-30365aca59e0`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_4.webp?alt=media&token=8985f562-a2fb-4e4e-918d-6afe5d73e094`,
    },

    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_5.webp?alt=media&token=43af3c42-dc18-4595-948c-84f4a9fd502c`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_6.webp?alt=media&token=6a0a4eb3-fb40-4647-827b-5b731b97cb80`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_7.webp?alt=media&token=5b5cd24d-2343-43f3-8e2a-5b9c6dc974d1`,
    },

    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_16.webp?alt=media&token=c94e31b7-a225-4db9-8cdf-2e51289d14d6`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_8.webp?alt=media&token=3766834a-7c9e-48ad-a800-bc7f84d5387b`,
    },
    {
        id: nanoid(8),
        photoSrc: `${URL}gallery%2FDSC_17.webp?alt=media&token=870866d4-1d1a-4c01-9826-021ab0fdaddf`,
    },
];
