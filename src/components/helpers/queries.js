const apiKey = import.meta.env.VITE_API_KEY;

export const getNewsByCategoryAndCountry = async(category, country) => {
    const url = `https://newsdata.io/api/1/news?apikey=${ apiKey }&category=${ category }&country=${ country }`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err) {
        return [];
    }
}