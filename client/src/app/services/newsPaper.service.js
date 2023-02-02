import httpService from './http.service';

const newsPaperEndpoint = '/newsPapers/';

const newsPaperService = {
    get: async () => {
        const { data } = await httpService.get(newsPaperEndpoint);
        return data;
    },
};

export default newsPaperService;
