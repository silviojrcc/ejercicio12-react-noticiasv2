// const API_KEY =  import.meta.env.VITE_API_KEY
const API_KEY =  "pub_241775ba736573459eb84da67935534ce47ff";

export const getNewsByCategoryAndCountry = async(category, country) => {
    const url = `https://newsdata.io/api/1/news?apikey=${ API_KEY }&category=${ category }&country=${ country }`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err) {
        return [];
    }
}