const assert = require('assert');
const test = require('../test_data/data');

let viewPort = test.data.viewPortSizes;

for (let n in viewPort) {
  describe('Page opening', function () {

    it('Page title verification', function () {
      browser.url('/Bug-Tracker');
      browser.setViewportSize(viewPort[n]);
      browser.pause(5000);
      let title = browser.getTitle();
      assert.equal(title, test.data.pageTitle, `Expected: ${test.data.pageTitle} | Actual: ${title}`);
    });

    it('Header title verification', function () {
      let title = $(test.data.header).getText();
      assert.equal(title, test.data.headerTitle, `Expected: ${test.data.headerTitle} | Actual: ${title}`);
    });

  });
}