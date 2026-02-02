import { mapCredentialsFromVmToApi } from "./login.mapper";
import * as apiModel from "./api/login.api-model";
import * as viewModel from "./login.vm";

describe("login.mapper.specs", () => {
  it("should return a credential with same name properties", () => {
    //Arrange
    const vmCredential: viewModel.Credentials = {
      user: "myuser",
      password: "mypassword"
    };

    const expectedApiCredentials: apiModel.Credentials = {
      user: "myuser",
      password: "mypassword"
    };

    //Act
    const result: apiModel.Credentials = 
      mapCredentialsFromVmToApi(vmCredential);

    //Assert
    expect(result).toEqual(expectedApiCredentials);
  });
});