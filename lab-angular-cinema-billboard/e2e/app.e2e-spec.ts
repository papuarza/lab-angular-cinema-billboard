import { LabAngularCinemaBillboardPage } from './app.po';

describe('lab-angular-cinema-billboard App', function() {
  let page: LabAngularCinemaBillboardPage;

  beforeEach(() => {
    page = new LabAngularCinemaBillboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
