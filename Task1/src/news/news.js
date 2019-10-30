import './news.scss';
import Loader from '../common/loader';

export default class News {
    constructor() {
        this.loader = new Loader();
    }

    createNewsItem(newsClone, item) {
        let img = document.createElement('img');
        img.src = item.urlToImage;

        newsClone.querySelector('.news-image').appendChild(img);
        newsClone.querySelector('.news-author').textContent = item.author;
        newsClone.querySelector('.news-date').textContent = new Date(item.publishedAt).toLocaleDateString("en-US");
        newsClone.querySelector('.news-title').textContent = item.title;
        newsClone.querySelector('.news-description').textContent = item.description;
        newsClone.querySelector('.news-read-more a').setAttribute('href', item.url);

        return newsClone;
    }

    renderNewsData(newsArray) {
        const fragment = document.createDocumentFragment();
        const newsItemTemplate = document.querySelector('#newsItemTemplate');
        const newsElement = document.querySelector('.news');

        newsArray.forEach(element => {
            const newsClone = (newsItemTemplate.content) ? newsItemTemplate.content.cloneNode(true).querySelector('.news-item') : newsItemTemplate.querySelector('.news-item').cloneNode(true);
            fragment.appendChild(this.createNewsItem(newsClone, element));
        });

        newsElement.innerHTML = '';
        newsElement.appendChild(fragment);
    }

    viewNewsItem(url) {
        this.loader.load(url).then(newsArray => this.renderNewsData(newsArray));
    }
}