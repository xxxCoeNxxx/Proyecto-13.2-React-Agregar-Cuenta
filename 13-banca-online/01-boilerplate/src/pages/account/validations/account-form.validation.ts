import { FormValidationResult } from "@/common/validations";
import { CreateAccountError, Account } from "../account.vm";
import {
  validateAliasField,
  validateTypeField,
} from "./account-field.validation";

export const validateForm = (
  account: Account,
): FormValidationResult<CreateAccountError> => {
  const fieldValidationResults = [
    validateAliasField(account.alias),
    validateTypeField(account.type),
  ];

  const formValidationResult = {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      alias: fieldValidationResults[0].errorMessage ?? "",
      type: fieldValidationResults[1].errorMessage ?? "",
    },
  };

  return formValidationResult;
};

