import {isIE} from 'isIE';

import {fetchPolyfill} from './fetchPolyfill';

export const getCharacters = async (limit: number = 10) => {
    try {
        const url = `www.breakingbadapi.com/api/characters?limit=${limit}`
        if(isIE() && isIE() < 10){
            return await fetchPolyfill(`http://${url}`);
        } else {
            const response = await fetch(`https://${url}`);
            return response.json();
        }
    } catch (err) {
        console.error(err);
    }
}
