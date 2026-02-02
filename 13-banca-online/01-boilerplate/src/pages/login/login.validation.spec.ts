import { validateform } from "./login.validation";
import { Credentials } from "./login.vm";

describe("pages/login/login.validation.ts", () => {
  it("Should return validation succeeded when both fields are informed", () => {
    //Arrange
    const credentials: Credentials = {
      user: "myuser",
      password: "mypassword",
    };

    //Act
    const result = validateform(credentials);

    //Assert
    expect(result.succeeded).toBeTruthy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual("");
  });

  it("Should return validation failed when user is empty", () => {
    //Arrange
    const credentials: Credentials = {
      user: "",
      password: "mypassword",
    };

    //Act
    const result = validateform(credentials);

    //Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("Debe informar el campo usuario");
    expect(result.errors.password).toEqual("");
  });

  it("Should return validation failed when password is empty", () => {
    //Arrange
    const credentials: Credentials = {
      user: "myuser",
      password: "",
    };

    //Act
    const result = validateform(credentials);

    //Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual("Debe informar el campo password");
  });

  it("Should return validation failed when both fields are empty", () => {
    //Arrange
    const credentials: Credentials = {
      user: "",
      password: "",
    };

    //Act
    const result = validateform(credentials);

    //Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("Debe informar el campo usuario");
    expect(result.errors.password).toEqual("Debe informar el campo password");
  });
});