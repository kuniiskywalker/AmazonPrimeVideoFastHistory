import { ILinkAppender } from '../ILinkAppender';

export class LinkAppenderIN implements ILinkAppender {

    public label: string = "Viewing History";
    public viewingHistoryUrl: string = "https://www.amazon.co.jp/gp/video/settings/watch-history/ref=atv_set_watch-history";

    public addForLoggedInPage() {

        const parentElement = document.querySelector('#nav-xshop');

        if (!parentElement) {
            return false;
        }

        const theFirstChild = parentElement.firstChild;

        const link = document.createElement('a');
        link.innerHTML = this.label;
        link.className = 'nav-a';
        link.href = this.viewingHistoryUrl;

        parentElement.insertBefore(link, theFirstChild);
    }
    public addForNoLogInPage() {}
}
