import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Password with less than 8 characters is invalid", () => {
    const actual = sut.checkPassword("12345");

    expect(actual).toBe(false);
  });

  it("Password with more than 8 characters should ok", () => {
    const actual = sut.checkPassword("12345678");

    expect(actual).toBe(true);
  });

  it("Password with no uppercase letters is invalid", () => {
    const actual = sut.checkPassword("12345abc");

    expect(actual).toBe(false);
  });

  it("Password with uppercase letters should ok", () => {
    const actual = sut.checkPassword("1234abcA");

    expect(actual).toBe(true);
  });

  it("Password with no lowercase letters is invalid", () => {
    const actual = sut.checkPassword("12345ABC");

    expect(actual).toBe(false);
  });

  it("Password with lowercase letters should ok", () => {
    const actual = sut.checkPassword("1234ABCDa");

    expect(actual).toBe(true);
  });

  it("Password with no lowercase letters is invalid", () => {});
});
