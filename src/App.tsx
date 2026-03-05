import {useState} from 'react';
import {generatePassword} from './utils/generatePassword';
import {getPasswordStrength} from './utils/getPasswordStrength';
import Slider from './components/Slider';
import CheckBox from './components/CheckBox';
import Strength from './components/Strength';
import './index.css';
import TextField from './components/TextField';
import Button from './components/Button';

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
		<main className='flex flex-col items-center sm:justify-center p-4 w-full h-full pt-12 sm:pt-4'>
			<h1 className='text-preset-4 sm:text-preset-2 text-grey-600'>Password Generator</h1>

			<section className='w-full sm:w-135'>
				<TextField value={password} />
			</section>

			<section className='w-full sm:w-135'>
				<form className='bg-grey-800 px-8 py-6 flex flex-col gap-8'>
					<Slider value={config.length} onChange={onChangelength} />

					<fieldset className='flex flex-col gap-4'>
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

					<Button text='Generate' onClick={onGeneratePassword} />
				</form>
			</section>
		</main>
	);
}

export default App;
