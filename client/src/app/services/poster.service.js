import httpService from './http.service';

const posterEndpoint = '/posters/';

const posterService = {
    get: async () => {
        const { data } = await httpService.get(posterEndpoint);
        return data;
    },
};

export default posterService;
