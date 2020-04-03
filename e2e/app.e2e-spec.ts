import { AngularBootstrap4NavPage } from './app.po';

describe('angular-bootstrap4-nav App', () => {
	let page: AngularBootstrap4NavPage;

	beforeEach(() => {
		page = new AngularBootstrap4NavPage();
	});

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Welcome to app!');
	});
});
