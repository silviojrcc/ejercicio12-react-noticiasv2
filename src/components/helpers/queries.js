const API_KEY =  import.meta.env.VITE_API_KEY

export const getNewsByCategory = async(category) => {
    const url = `https://newsdata.io/api/1/news?apikey=${ API_KEY }&category=${ category }&country=ar`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err) {
        return [];
    }
}