import './sources.scss';
import Loader from '../common/loader';

const availableSources = ['bbc-news', 'cnbc', 'bild', 'espn', 'business-insider'];

export default class Sources {
    constructor() {
        this.loader = new Loader();
    }

    getSources() {
        return availableSources.map(name => ({name, url: this.loader.prepareUrl(name)}));
    }

    createSource(sourceClone, item) {
        sourceClone.querySelector('.source-item-name').textContent = item.name;
        sourceClone.setAttribute('data-source-url', item.url);

        return sourceClone;
    }

    viewSources() {
        const fragment = document.createDocumentFragment();
        const sourcesElement = document.querySelector('.sources');
        const sourceItemTemplate = document.querySelector('#sourceItemTemplate');

        const sources = this.getSources();

        for (let i = 0; i < sources.length; i++) {
            const sourceClone = sourceItemTemplate.content.cloneNode(true).querySelector('.source-item');
            fragment.appendChild(this.createSource(sourceClone, sources[i]));
        }

        sourcesElement.innerHTML = '';
        sourcesElement.appendChild(fragment);
    }
}