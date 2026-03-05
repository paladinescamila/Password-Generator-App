import {useState} from 'react';

export default function TextField({value}: {value: string}) {
	const [copied, setCopied] = useState<boolean>(false);

	const copyPassword = () => {
		navigator.clipboard.writeText(value);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div>
			<input type='text' placeholder='P4$5W0rD!' readOnly value={value} />
			<div>
				{copied ? <span>Copied</span> : null}
				<button aria-label='Copy password' onClick={copyPassword}>
					Copy
				</button>
			</div>
		</div>
	);
}
