import {isIE} from 'isIE';
import {mockFetch} from './mockFetch';

export const getCharacters = async (limit: number = 10) => {
    try {
        if(isIE() && isIE() < 10) {
            return await mockFetch(limit);
        }
        const response = await window.fetch(`https://breakingbadapi.com/api/characters?limit=${limit}`);
        return response.json();
    } catch (err) {
        console.error(err);
    }
}
