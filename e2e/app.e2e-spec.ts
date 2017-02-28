import { AngularCheckinPage } from './app.po';

describe('angular-checkin App', function() {
  let page: AngularCheckinPage;

  beforeEach(() => {
    page = new AngularCheckinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
