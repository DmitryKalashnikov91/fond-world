import httpService from './http.service';

const sketchesEndpoint = '/sketches/';

const sketchesService = {
    get: async () => {
        const { data } = await httpService.get(sketchesEndpoint);
        return data;
    },
};

export default sketchesService;
