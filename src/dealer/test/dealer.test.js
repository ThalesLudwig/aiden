describe("Dealer", () => {
  test("should return empty response if no data is provided", () => {
    const dealer = require("../index");
    const response = dealer();
    expect(response.length).toEqual(0);
  });

  test("should return empty response if data has no intentions", () => {
    const dealer = require("../index");
    const data = { intentions: [] };
    const response = dealer(data);
    expect(response.length).toEqual(0);
  });
});
