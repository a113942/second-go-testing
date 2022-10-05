import { SongsSelectors as po, SongsSelectors } from './app-songs.selectors';

describe('The Songs List', () => {
  beforeEach(() => {
    cy.visit('/songs/list');
  });
  describe('The Initial State', () => {
    it('should display the list component', () => {
      po.getSongsList().should('exist');
    });
  });

  describe('Data Scenarios', () => {
    describe('Happy Path', () => {
      describe('Songs are Displayed Properly', () => {
        it('displays two songs', () => {
          SongsSelectors.getSongsListItems().should('have.length', 2);
        });

        it('first song should have an album', () => {
          SongsSelectors.getSongListItem('0')
            .find('[data-testid="album"]')
            .should('have.text', '13 Songs');
        });

        it('second song should have no album', () => {
          SongsSelectors.getSongListItem('1')
            .find('[data-testid="album"]')
            .should('have.text', 'No Album Recorded');
        });
      });
    });
  });
});
