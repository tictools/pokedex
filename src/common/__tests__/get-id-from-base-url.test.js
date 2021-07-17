import { getIdFromBaseUrl } from "../utils";
import { createEnzymeAdapter } from "../../../test/enzyme-adapter";
createEnzymeAdapter();

describe("given an url with id", () => {
  const baseUrl = "http://fakeapi.com";
  describe("when id has only one number", () => {
    test("then should return correct id from a base url", () => {
      const url = "http://fakeapi.com/1";
      const EXPECTED_RESULT = "1";

      const result = getIdFromBaseUrl(url, baseUrl);
      expect(result).toBe(EXPECTED_RESULT);
    });
  });
  describe("when id has more than one number", () => {
    test("then should return correct id from a base url", () => {
      const url = "http://fakeapi.com/123";
      const EXPECTED_RESULT = "123";

      const result = getIdFromBaseUrl(url, baseUrl);
      expect(result).toBe(EXPECTED_RESULT);
    });
  });
});
