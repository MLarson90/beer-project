import { NewsitePage } from './app.po';

describe('newsite App', () => {
  let page: NewsitePage;

  beforeEach(() => {
    page = new NewsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
