import { KneelerPage } from './app.po';

describe('kneeler App', () => {
  let page: KneelerPage;

  beforeEach(() => {
    page = new KneelerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
