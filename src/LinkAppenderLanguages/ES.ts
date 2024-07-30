import { ILinkAppender } from '../ILinkAppender';

export class LinkAppenderES implements ILinkAppender {

    public label: string = "Ver historial";
    public viewingHistoryUrl: string = "https://www.primevideo.com/region/fe/settings/watch-history/ref=atv_set_watch-history";

    public addForLoggedInPage() {
        const parentElement = document.querySelector('#nav-xshop');

        if (!parentElement) {
            return false;
        }

        const link = document.createElement('a');
        link.href = this.viewingHistoryUrl;
        link.innerHTML = this.label;
        link.className = 'nav-a'; //aa 

        parentElement.insertBefore(link, parentElement.firstChild);
    }
    public addForNoLogInPage() {}
}
