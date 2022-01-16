class StubUserClient {
  async login(id, password) {
    if (id === "dowon" && password === "1234") {
      return [{ id: "dowon", isLogedIn: true }];
    } else {
      return [{ id: "dowon", isLogedIn: false }];
    }
  }
}

module.exports = StubUserClient;
