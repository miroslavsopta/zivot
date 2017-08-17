import { ZivotPage } from './app.po';

describe('zivot App', () => {
  let page: ZivotPage;

  beforeEach(() => {
    page = new ZivotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
