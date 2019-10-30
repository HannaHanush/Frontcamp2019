import Sources from "../sources/sources";
import News from "../news/news";

export default class App {
    constructor() {
        this.sources = new Sources();
        this.news = new News();
    }

    viewNews(e) {
        let target = e.target;
        if (!target.classList.contains('source-item')) {
            target = target.parentNode;
        }
        
        this.news.viewNewsItem(target.getAttribute('data-source-url'));
    }

    run() {
        this.sources.viewSources();

        document.querySelectorAll('.source-item').forEach(item => {
            item.addEventListener('click', (e) => { this.viewNews(e); });
        });
    }
}