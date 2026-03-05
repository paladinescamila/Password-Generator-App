export default function Slider({
	value,
	onChange,
}: {
	value: number;
	onChange: (e: ChangeEvent) => void;
}) {
	return (
		<div>
			<div>
				<label htmlFor='length-slider'>Character Length</label>
				<span id='length-value'>{value}</span>
			</div>
			<input
				type='range'
				id='length-slider'
				min='0'
				max='20'
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
