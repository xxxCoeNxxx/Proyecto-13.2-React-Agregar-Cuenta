import { isStringValueInformed, isValidIban } from "@/common/validations";
import { FieldValidationResult } from "../transfer.vm";

export const REQUIRED_FIELD_MESSAGE = "Debe informar el campo";
export const INVALID_IBAN_MESSAGE = "El IBAN no está bien formado";

const buildValidationFailedResult = (
  errorMessage: string,
): FieldValidationResult => ({
  succeeded: false,
  errorMessage,
});

const buildValidationSucceededResult = () => ({
  succeeded: true,
});

export const validateIBANField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }

  if (!isValidIban(value)) {
    return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
  }

  return buildValidationSucceededResult();
};
