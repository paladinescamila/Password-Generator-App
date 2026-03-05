/**
 * Generates a random password based on the provided configuration.
 *
 * @param config - An object containing the password generation settings, including length and character types to include.
 * @returns The generated password as a string.
 */
export const generatePassword = (config: PasswordGenerationConfig): string => {
	if (
		config.length === 0 ||
		(!config.includeUppercaseLetters &&
			!config.includeLowercaseLetters &&
			!config.includeNumbers &&
			!config.includeSymbols)
	)
		return '';

	let characters = '';

	if (config.includeUppercaseLetters) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if (config.includeLowercaseLetters) characters += 'abcdefghijklmnopqrstuvwxyz';
	if (config.includeNumbers) characters += '0123456789';
	if (config.includeSymbols) characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

	let generatedPassword = '';

	for (let i = 0; i < config.length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		generatedPassword += characters[randomIndex];
	}

	return generatedPassword;
};
