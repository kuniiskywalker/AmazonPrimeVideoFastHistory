import { Countries } from './Countries';

import { ILinkAppender } from './ILinkAppender';
import { LinkAppenderJP } from './LinkAppenderLanguages/JP';
import { LinkAppenderUK } from './LinkAppenderLanguages/UK';
import { LinkAppenderUS } from './LinkAppenderLanguages/US';

export class LinkAppenderFactory {
    public static create(lang: Countries): ILinkAppender {
        if (lang === Countries.JP) {
            return new LinkAppenderJP();
        } else if (lang === Countries.UK) {
            return new LinkAppenderUK();
        } else if (lang === Countries.US) {
            return new LinkAppenderUS();
        } else {
            throw new Error("Invalid Payment Type");
        }
    }
}
