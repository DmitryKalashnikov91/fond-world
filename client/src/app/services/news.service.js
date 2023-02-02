import httpService from './http.service';

const newsEndpoint = '/news/';

const newsService = {
    get: async () => {
        const { data } = await httpService.get(newsEndpoint);
        return data;
    },
};

export default newsService;
