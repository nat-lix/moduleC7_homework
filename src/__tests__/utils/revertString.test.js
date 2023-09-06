import { revertString } from "../../utils/revertString.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => {
  expect(revertString("abc")).toBe("cba");
  expect(revertString("happiness")).toBe("ssenippah");
  expect(revertString("12345")).toBe("54321");
  expect(revertString("nice")).toBe("ecin");
  });
});
