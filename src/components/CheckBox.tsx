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
		<div>
			<input type='checkbox' id={id} checked={checked} onChange={onChange} />
			<label htmlFor={id}> {label} </label>
		</div>
	);
}
