import { ILinkAppender } from '../ILinkAppender';

export class LinkAppenderUS implements ILinkAppender {

    public label: string = "Viewing History";
    public viewingHistoryUrl: string = "https://www.amazon.co.jp/gp/video/settings/watch-history/ref=atv_set_watch-history";

    public addForLoggedInPage() {
        const parentElement = document.querySelector('[data-csa-c-content-id="nav_cs_gb"]');

        const link = document.createElement('a');
        link.href = this.viewingHistoryUrl;
        link.innerHTML = this.label;
        link.className = 'nav-a';

        parentElement.insertAdjacentElement('afterend', link);
    }
    public addForNoLogInPage() {}
}
