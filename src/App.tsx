import {useState} from 'react';
import {generatePassword} from './utils/generatePassword';
import {getPasswordStrength} from './utils/getPasswordStrength';
import Slider from './components/Slider';
import CheckBox from './components/CheckBox';
import Strength from './components/Strength';
import './index.css';
import TextField from './components/TextField';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

function App() {
	const [config, setConfig] = useState<PasswordGenerationConfig>({
		length: 0,
		includeUppercaseLetters: false,
		includeLowercaseLetters: false,
		includeNumbers: false,
		includeSymbols: false,
	});

	const [password, setPassword] = useState<string>('');
	const [strength, setStrength] = useState<PasswordStrength>('none');

	const onChangelength = (e: ChangeEvent) =>
		setConfig((prev) => ({...prev, length: Number(e.target.value)}));

	const onChangeIncludeUppercaseLetters = (e: ChangeEvent) =>
		setConfig((prev) => ({...prev, includeUppercaseLetters: e.target.checked}));

	const onChangeIncludeLowercaseLetters = (e: ChangeEvent) =>
		setConfig((prev) => ({...prev, includeLowercaseLetters: e.target.checked}));

	const onChangeIncludeNumbers = (e: ChangeEvent) =>
		setConfig((prev) => ({...prev, includeNumbers: e.target.checked}));

	const onChangeIncludeSymbols = (e: ChangeEvent) =>
		setConfig((prev) => ({...prev, includeSymbols: e.target.checked}));

	const onGeneratePassword = () => {
		const generatedPassword = generatePassword(config);

		setPassword(generatedPassword);
		setStrength(getPasswordStrength(generatedPassword));
	};

	return (
		<main>
			<h1>Password Generator</h1>

			<section>
				<TextField value={password} />
			</section>

			<section>
				<form>
					<Slider value={config.length} onChange={onChangelength} />

					<fieldset>
						<CheckBox
							checked={config.includeUppercaseLetters}
							onChange={onChangeIncludeUppercaseLetters}
							id='uppercase'
							label='Include Uppercase Letters'
						/>

						<CheckBox
							checked={config.includeLowercaseLetters}
							onChange={onChangeIncludeLowercaseLetters}
							id='lowercase'
							label='Include Lowercase Letters'
						/>

						<CheckBox
							checked={config.includeNumbers}
							onChange={onChangeIncludeNumbers}
							id='numbers'
							label='Include Numbers'
						/>

						<CheckBox
							checked={config.includeSymbols}
							onChange={onChangeIncludeSymbols}
							id='symbols'
							label='Include Symbols'
						/>
					</fieldset>

					<Strength value={strength} />

					<button type='button' onClick={onGeneratePassword}>
						GENERATE <span>&rarr;</span>
					</button>
				</form>
			</section>
		</main>
	);
}

export default App;
