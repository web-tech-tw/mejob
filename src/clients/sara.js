import ky from "ky"

const {
    VITE_SARA_RECV_HOST: baseUrl,
    VITE_SARA_TOKEN_NAME: tokenName,
} = import.meta.env;

const useSaraToken = (request) => {
    const tokenValue = localStorage.getItem(tokenName);
    if (!tokenValue) return;
    request.headers.set('authorization', `SARA ${tokenValue}`);
};

const newSaraToken = (response) => {
    const tokenValue = response.headers.get('sara-issue');
    if (!tokenValue) return;
    localStorage.setItem(tokenName, tokenValue);
};

const client = ky.create({
    prefixUrl: baseUrl,
    hooks: {
        beforeRequest: [
            useSaraToken,
        ],
        afterResponse: [
            newSaraToken,
        ],
    }
});

export const useClient = () => client;
