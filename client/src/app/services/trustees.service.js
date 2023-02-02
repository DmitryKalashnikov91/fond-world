import httpService from './http.service';

const trusteesEndpoint = '/trustees/';

const trusteesService = {
    get: async () => {
        const { data } = await httpService.get(trusteesEndpoint);
        return data;
    },
};

export default trusteesService;
