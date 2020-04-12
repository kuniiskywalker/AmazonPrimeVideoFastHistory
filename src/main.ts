import { CountryFactory } from './CountryFactory';
import { ILinkAppender } from './ILinkAppender';
import { LinkAppenderFactory } from './LinkAppenderFactory';

const addLink1:ILinkAppender = LinkAppenderFactory.create(CountryFactory.create());
addLink1.addForLoggedInPage();
addLink1.addForNoLogInPage();
