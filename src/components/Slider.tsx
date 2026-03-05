export default function Slider({
	value,
	onChange,
}: {
	value: number;
	onChange: (e: ChangeEvent) => void;
}) {
	const min = 0;
	const max = 20;
	const percent = ((value - min) / (max - min)) * 100;

	return (
		<div>
			<div className='flex flex-row gap-4 items-center justify-between'>
				<label
					htmlFor='length-slider'
					className='text-preset-4 sm:text-preset-3 text-grey-200'>
					Character Length
				</label>
				<span id='length-value' className='text-preset-2 sm:text-preset-1 text-green-200'>
					{value}
				</span>
			</div>
			<input
				type='range'
				id='length-slider'
				min={min}
				max={max}
				value={value}
				onChange={onChange}
				style={{
					background: `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${percent}%, #18171F ${percent}%, #18171F 100%)`,
				}}
				className='
					range-slider
					mt-6 w-full h-2 appearance-none cursor-pointer
					[&::-webkit-slider-runnable-track]:h-2
					[&::-webkit-slider-runnable-track]:bg-transparent
					[&::-moz-range-track]:h-2
					[&::-moz-range-track]:bg-transparent
    			'
			/>
		</div>
	);
}
