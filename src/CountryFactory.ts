import { Countries } from './Countries';

export class CountryFactory {
    public static create(): Countries {
        switch (location.hostname) {
            case 'www.amazon.co.jp':
                return Countries.JP;
            case 'www.amazon.co.uk':
                return Countries.UK;
            case 'www.amazon.com':
                return Countries.US;
            case 'www.amazon.in':
                return Countries.IN;
            case 'www.amazon.es':
                return Countries.ES;
        }
        return Countries.JP
    }
}
