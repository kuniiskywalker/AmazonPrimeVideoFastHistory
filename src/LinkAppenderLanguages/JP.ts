import { ILinkAppender } from '../ILinkAppender';

export class LinkAppenderJP implements ILinkAppender {

    public label: string = "視聴履歴";
    public viewingHistoryUrl: string = "https://www.amazon.co.jp/gp/video/settings/watch-history/ref=atv_set_watch-history";

    public addForLoggedInPage() {

        const element = document.querySelector('#icp-nav-flyout > span > span.nav-line-2 > div');
        const locale = element?.textContent;
        if (locale != "JP") {
            this.label = "Viewing History";
        }

        const parentElement = document.querySelector('[data-csa-c-content-id="nav_cs_prime_video"]');

        const link = document.createElement('a');
        link.href = this.viewingHistoryUrl;
        link.innerHTML = this.label;
        link.className = 'nav-a';

        parentElement.insertAdjacentElement('afterend', link);
    }
    public addForNoLogInPage() {
    }
}
