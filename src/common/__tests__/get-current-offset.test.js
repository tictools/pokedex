import { getCurrentOffset } from "../utils";
import { createEnzymeAdapter } from "../../../test/enzyme-adapter";
createEnzymeAdapter();

describe("given a page", () => {
  const page = 1;
  describe("when initial value and offset are defined as constants", () => {
    test("then should return correct offset and type", () => {
      const EXPECTED_RESULT = 10;

      const result = getCurrentOffset(page);
      expect(result).toBe(EXPECTED_RESULT);
      expect(typeof result === "number").toBe(true);
    });
  });
});
