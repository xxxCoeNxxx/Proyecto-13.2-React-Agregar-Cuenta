import {
  validateIBANField,
  REQUIRED_FIELD_MESSAGE,
  INVALID_IBAN_MESSAGE,
} from "./transfer-field.validation";

describe("transfer-field.validation specs", () => {
  describe("validateIBANField", () => {
    it("should return false when iban is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateIBANField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("should return false when iban is not well formed", () => {
      // Arrange
      const value = "ES91 2100 0418 4502 0003 1333";

      // Act
      const result = validateIBANField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_IBAN_MESSAGE);
    });

    it("should return true when iban is well formed", () => {
      // Arrange
      const value = "ES91 2100 0418 4502 0005 1332";

      // Act
      const result = validateIBANField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
