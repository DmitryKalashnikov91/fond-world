import httpService from './http.service';

const faceEndpoint = '/faces/';

const facesService = {
    get: async () => {
        const { data } = await httpService.get(faceEndpoint);
        return data;
    },
};

export default facesService;
