class FakeLogin {
  command() {
    console.log("== fake login ==");
    return new Promise(function (resolve) {
      resolve(true);
    });
  }
}

module.exports = FakeLogin;
