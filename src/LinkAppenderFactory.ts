import { Countries } from './Countries';

import { ILinkAppender } from './ILinkAppender';
import { LinkAppenderJP } from './LinkAppenderLanguages/JP';
import { LinkAppenderUK } from './LinkAppenderLanguages/UK';
import { LinkAppenderUS } from './LinkAppenderLanguages/US';
import { LinkAppenderIN } from './LinkAppenderLanguages/IN';
import { LinkAppenderES } from './LinkAppenderLanguages/ES';

export class LinkAppenderFactory {
    public static create(host: Countries): ILinkAppender {
        if (host === Countries.JP) {
            return new LinkAppenderJP();
        } else if (host === Countries.UK) {
            return new LinkAppenderUK();
        } else if (host === Countries.US) {
            return new LinkAppenderUS();
        } else if (host === Countries.IN) {
            return new LinkAppenderIN();
        } else if (host === Countries.ES) {
            return new LinkAppenderES();
        } else {
            throw new Error("Invalid Payment Type");
        }
    }
}
