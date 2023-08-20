import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Password with less than 8 characters is invalid", () => {
    const actual = sut.checkPassword("12345");

    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it("Password with more than 8 characters should ok", () => {
    const actual = sut.checkPassword("12345678");

    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  it("Password with no uppercase letters is invalid", () => {
    const actual = sut.checkPassword("123");

    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPERCASE);
  });

  it("Password with uppercase letters should ok", () => {
    const actual = sut.checkPassword("ABC");

    expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPERCASE);
  });

  it("Password with no lowercase letters is invalid", () => {
    const actual = sut.checkPassword("123");

    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWERCASE);
  });

  it("Password with lowercase letters should ok", () => {
    const actual = sut.checkPassword("abc");

    expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWERCASE);
  });

  it("Complex password should be ok", () => {
    const actual = sut.checkPassword("aBcd1234");

    expect(actual.valid).toBe(true);
    expect(actual.reasons).toHaveLength(0);
  });
});
