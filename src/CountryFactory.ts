import { Countries } from './Countries';

export class CountryFactory {
    public static create(): Countries {
        switch (location.hostname) {
            case 'www.amazon.co.jp':
                return Countries.JP;
            case 'www.amazon.co.uk':
                return Countries.UK;
        }
        return Countries.JP
    }
}