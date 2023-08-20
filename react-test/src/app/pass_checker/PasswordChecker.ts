export enum PasswordErrors {
  SHORT = "Password is too short",
  NO_UPPERCASE = "Upper case letter is required",
  NO_LOWERCASE = "Lower case letter is required",
  NO_NUMBER = "Password must contain at least one number",
  NO_SYMBOL = "Password must contain at least one symbol",
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];

    if (password.length < 8) reasons.push(PasswordErrors.SHORT);
    if (password === password.toLowerCase())
      reasons.push(PasswordErrors.NO_UPPERCASE);
    if (password === password.toUpperCase())
      reasons.push(PasswordErrors.NO_LOWERCASE);

    return { valid: reasons.length > 0 ? false : true, reasons: reasons };
  }
}
