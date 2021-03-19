describe("Context", () => {
  test("should start with empty context", () => {
    const context = require("../index");
    expect(context.get().length).toEqual(0);
  });
  test("should add data to context", () => {
    const context = require("../index");
    expect(context.get().length).toEqual(0);
    context.add("foo");
    expect(context.get()[0]).toEqual("foo");
  });
});
