import { ILinkAppender } from '../ILinkAppender';

export class LinkAppenderUK implements ILinkAppender {

    public label: string = "Viewing History";
    public viewingHistoryUrl: string = "https://www.primevideo.com/region/fe/settings/watch-history/ref=atv_set_watch-history";

    public addForLoggedInPage() {
        const parentElement = document.querySelector('.av-retail-m-nav-list-subitems');

        if (!parentElement) {
            return false;
        }

        const theFirstChild = parentElement.firstChild;

        const link = document.createElement('li');
        link.innerHTML = `<a href="${this.viewingHistoryUrl}">${this.label}</a>`;
        link.className = 'av-retail-m-nav-subitem';

        parentElement.insertBefore(link, theFirstChild);
    }
    public addForNoLogInPage() {
        const parentElement = document.querySelector('#nav-xshop');

        if (!parentElement) {
            return false;
        }

        const link = document.createElement('a');
        link.innerHTML = `<span class="nav-a-content">${this.label}</span>`;
        link.className = 'nav-a nav-right';
        link.href = this.viewingHistoryUrl;

        parentElement.insertBefore(link, parentElement.querySelector('a'));
    }
}
