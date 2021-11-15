import { ILinkAppender } from '../ILinkAppender';

export class LinkAppenderJP implements ILinkAppender {

    public label: string = "視聴履歴";
    public viewingHistoryUrl: string = "https://www.amazon.co.jp/gp/video/settings/watch-history/ref=atv_set_watch-history";

    public addForLoggedInPage() {
        const parentElement = document.querySelector('.av-retail-m-nav-list-main-items');

        const link = document.createElement('li');
        link.innerHTML = `<a href="${this.viewingHistoryUrl}">${this.label}</a>`;
        link.className = 'av-retail-m-nav-main-item';

        parentElement.appendChild(link);
    }
    public addForNoLogInPage() {
    }
}
