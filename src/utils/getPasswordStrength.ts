/**
 * Determines the strength of a password based on its length and character composition.
 *
 * @param {string} password - The password to evaluate.
 * @returns {PasswordStrength} The strength of the password, which can be 'none', 'too-weak', 'weak', 'medium', or 'strong'.
 */
export const getPasswordStrength = (password: string): PasswordStrength => {
	if (password.length === 0) return 'none';

	const hasUppercaseLetters = /[A-Z]/.test(password);
	const hasLowercaseLetters = /[a-z]/.test(password);
	const hasNumbers = /\d/.test(password);
	const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

	const characterVariety = [
		hasUppercaseLetters,
		hasLowercaseLetters,
		hasNumbers,
		hasSymbols,
	].filter(Boolean).length;

	if (password.length < 6 || characterVariety === 1) return 'too-weak';
	else if (password.length < 8 || characterVariety === 2) return 'weak';
	else if (password.length < 12 || characterVariety === 3) return 'medium';
	else return 'strong';
};
