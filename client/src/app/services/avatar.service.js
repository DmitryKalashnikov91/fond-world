import httpService from './http.service';

const avatarsEndpoint = '/avatars/';

const avatarsService = {
    get: async () => {
        const { data } = await httpService.get(avatarsEndpoint);
        return data;
    },
};

export default avatarsService;
