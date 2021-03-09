export const getCharacters = async (limit: number = 10) => {
    try {
        const response = await window.fetch(`https://breakingbadapi.com/api/characters?limit=${limit}`);

        return response.json();
    } catch (err) {
        console.error(err);
    }
}
