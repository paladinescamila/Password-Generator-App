export default function Strength({value}: {value: PasswordStrength}) {
	return (
		<div role='status'>
			<span>STRENGTH</span>
			<div>{strengths[value].text}</div>
			<div>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
}

const strengths: Record<PasswordStrength, {text: string; color: string}> = {
	none: {text: '', color: 'transparent'},
	'too-weak': {text: 'Too Weak!', color: 'red'},
	weak: {text: 'Weak', color: 'orange'},
	medium: {text: 'Medium', color: 'yellow'},
	strong: {text: 'Strong', color: 'green'},
};
