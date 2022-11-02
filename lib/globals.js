const globals = {
  beforeEach: function (browser, done) {
    browser.fakeLogin();
    done();
  }
};

module.exports = globals;
