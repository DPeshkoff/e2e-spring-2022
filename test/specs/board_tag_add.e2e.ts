import BoardPage from  '../pageobjects/board.page';
import * as assert from 'assert';
import LoginPage from '../pageobjects/login.page';

describe('Board. Add tag', () => {
    beforeEach(async () => {
        await LoginPage.auth();
        BoardPage.setWindowSize(1400, 1200);
    });

    it('should add tag', async () => {
        const tagName = 'tag_name';

        await BoardPage.open();

        await BoardPage.TagModal.openTagsModal();
        await BoardPage.TagModal.addTag(tagName);

        const testTagName = await BoardPage.TagModal.getFirstTagText();

        assert.strictEqual(
          tagName,
          testTagName,
          `Название тега ${testTagName} не соответствует ожидаемому ${tagName}`,
        );
    });
});
