import httpService from './http.service';

const poemEndpoint = '/poems/';

const poemService = {
    get: async () => {
        const { data } = await httpService.get(poemEndpoint);
        return data;
    },
};

export default poemService;
