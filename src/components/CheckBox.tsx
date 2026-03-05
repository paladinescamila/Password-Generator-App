import CheckIcon from '../assets/check.svg';

export default function CheckBox({
	checked,
	onChange,
	id,
	label,
}: {
	checked: boolean;
	onChange: (e: ChangeEvent) => void;
	id: string;
	label: string;
}) {
	return (
		<div className='flex items-center gap-4 sm:gap-6'>
			<input
				type='checkbox'
				id={id}
				checked={checked}
				onChange={onChange}
				className='opacity-0 absolute pointer-events-none'
			/>
			<label
				htmlFor={id}
				className='flex flex-row gap-6 items-center cursor-pointer select-none group'>
				<div
					className={`w-5 h-5 border-2 flex items-center justify-center transition-colors duration-200 ${checked ? 'border-green-200 bg-green-200' : 'border-grey-200'} group-hover:border-green-200`}>
					{checked && <img src={CheckIcon} alt='check icon' />}
				</div>
				<span className='text-preset-4 sm:text-preset-3 text-grey-200'>{label}</span>
			</label>
		</div>
	);
}
