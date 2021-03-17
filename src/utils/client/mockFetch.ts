import {data} from './ie9data';

export const mockFetch = (limit: number) => {
    return new Promise((res) => {
        setInterval(() => res(data.slice(0, limit -1)), 500);
    });
}
