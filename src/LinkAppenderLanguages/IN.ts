import { ILinkAppender } from '../ILinkAppender';

export class LinkAppenderIN implements ILinkAppender {

    public label: string = "Viewing History";
    public viewingHistoryUrl: string = "/gp/yourstore/iyr/ref=pd_ys_iyr_edit_watched?ie=UTF8&collection=watched";

    public addForLoggedInPage() {
        debugger;
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
