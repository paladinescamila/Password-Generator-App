import {useMemo} from 'react';

export default function Strength({value}: {value: PasswordStrength}) {
	const strengthNumber = useMemo(() => strengths[value].number, [value]);

	return (
		<div
			role='status'
			className='bg-grey-850 px-8 py-5.5 flex flex-row items-center justify-between gap-4'>
			<span className='text-grey-600 text-preset-4 sm:text-preset-3 uppercase'>Strength</span>
			<div className='flex flex-row gap-4'>
				<span className='text-preset-3 sm:text-preset-2 uppercase text-grey-200'>
					{strengths[value].text}
				</span>
				<div className='flex flex-row gap-2'>
					{Array.from({length: 4}).map((_, index) => (
						<span
							className={`w-2.5 h-7 border-2 transition-colors duration-200 ${strengths[strengthNumber >= index + 1 ? value : 'none'].className}`}></span>
					))}
				</div>
			</div>
		</div>
	);
}

const strengths: Record<PasswordStrength, {text: string; number: number; className: string}> = {
	none: {text: '', number: 0, className: 'bg-transparent border-grey-200'},
	'too-weak': {text: 'Too Weak!', number: 1, className: 'bg-red-500 border-red-500'},
	weak: {text: 'Weak', number: 2, className: 'bg-orange-400 border-orange-400'},
	medium: {text: 'Medium', number: 3, className: 'bg-yellow-300 border-yellow-300'},
	strong: {text: 'Strong', number: 4, className: 'bg-green-200 border-green-200'},
};
