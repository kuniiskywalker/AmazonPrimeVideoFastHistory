export interface ILinkAppender {
    label: string;
    viewingHistoryUrl: string;

    addForLoggedInPage () :void
    addForNoLogInPage () :void
}