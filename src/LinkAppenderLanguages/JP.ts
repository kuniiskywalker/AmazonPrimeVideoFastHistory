import { ILinkAppender } from '../ILinkAppender';

export class LinkAppenderJP implements ILinkAppender {

    public label: string = "視聴履歴";
    public viewingHistoryUrl: string = "/gp/yourstore/iyr/ref=pd_ys_iyr_edit_watched?ie=UTF8&collection=watched";

    constructor() {
        const languageCode = document.querySelector('.nav-a.nav-a-2.icp-link-style-2').textContent.trim();

        this.label = (() => {
            switch (languageCode) {
                case "JP": return "視聴履歴";
                case "ZH": return "查看历史";
                default : return "Viewing History";
            }
        })();
    }

    public addForLoggedInPage() {
        const parentElement = document.querySelector('.av-retail-m-nav-list-subitems');

        const theFirstChild = parentElement.firstChild;

        const link = document.createElement('li');
        link.innerHTML = `<a href="${this.viewingHistoryUrl}">${this.label}</a>`;
        link.className = 'av-retail-m-nav-subitem';

        parentElement.insertBefore(link, theFirstChild);
    }
    public addForNoLogInPage() {
        const parentElement = document.querySelector('#nav-subnav');

        const link = document.createElement('a');
        link.innerHTML = `<span class="nav-a-content">${this.label}</span>`;
        link.className = 'nav-a nav-right';
        link.href = this.viewingHistoryUrl;

        parentElement.appendChild(link);
    }
}