// npx wdio run wdio.conf.js

let element;

describe('Screenshot test', () => {
    it('open', async () => {
        await browser.url("https://www.bbc.com/");
    });

    it("scroll", async () => {
        footer = await $("footer");
        footer.scrollIntoView();
    });

    it("screen", async () => {
        await browser.saveElement(footer);
    });
});
