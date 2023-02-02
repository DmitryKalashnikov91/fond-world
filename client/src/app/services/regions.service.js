import httpService from './http.service';

const regionsEndpoint = '/regions/';

const regionsService = {
    get: async () => {
        const { data } = await httpService.get(regionsEndpoint);
        return data;
    },
};

export default regionsService;
