const apiKey = 'e9905f899c48433b916b572aef533198';

export default class Loader {
    async load(url) {
        let response = await fetch(url);
        let jsonResponse = await response.json();
    
        return jsonResponse.articles.slice(0, 5);
    }

    prepareUrl(source) {
        return `https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`;
    }
}