const apiKey = process.env.API_KEY;

export const getNewsByCategory = async(category) => {
    const url = `https://newsdata.io/api/1/news?apikey=${ apiKey }&category=${ category }&country=ar`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err) {
        return [];
    }
}