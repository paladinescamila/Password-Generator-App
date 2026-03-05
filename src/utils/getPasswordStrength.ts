/**
 * Determines the strength of a password based on its length and character composition.
 *
 * @param {string} password - The password to evaluate.
 * @returns {PasswordStrength} The strength of the password, which can be 'none', 'too-weak', 'weak', 'medium', or 'strong'.
 */
export const getPasswordStrength = (password: string): PasswordStrength => {
	const hasUppercaseLetters = /[A-Z]/.test(password);
	const hasLowercaseLetters = /[a-z]/.test(password);
	const hasNumbers = /\d/.test(password);
	const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

	if (password.length === 0) return 'none';

	if (
		password.length < 6 ||
		(!hasUppercaseLetters && !hasLowercaseLetters) ||
		(!hasNumbers && !hasSymbols)
	)
		return 'too-weak';

	if (
		password.length < 8 ||
		!(hasUppercaseLetters && hasLowercaseLetters) ||
		!(hasNumbers || hasSymbols)
	)
		return 'weak';

	if (
		password.length < 12 ||
		!(hasUppercaseLetters && hasLowercaseLetters) ||
		!(hasNumbers && hasSymbols)
	)
		return 'medium';

	return 'strong';
};
