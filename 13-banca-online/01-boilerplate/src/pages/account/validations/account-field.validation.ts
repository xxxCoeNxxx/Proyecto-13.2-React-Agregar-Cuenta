import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceededResult,
  FieldValidationResult,
  isStringValueInformed,
} from "@/common/validations";

export const validateAliasField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
};

export const validateTypeField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
}