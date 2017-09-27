import { RecepiesAppPage } from './app.po';

describe('recepies-app App', () => {
  let page: RecepiesAppPage;

  beforeEach(() => {
    page = new RecepiesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
