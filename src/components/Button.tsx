export default function Button({text, onClick}: {text: string; onClick: () => void}) {
	return (
		<button
			type='button'
			onClick={onClick}
			className='uppercase p-4.5 bg-green-200 hover:bg-transparent text-grey-800 hover:text-green-200 border-2 border-green-200 flex flex-row gap-6 items-center justify-center text-preset-4 sm:text-preset-3 flex-1 cursor-pointer transition-colors duration-200 group'>
			{text}{' '}
			<svg
				width='12'
				height='12'
				viewBox='0 0 12 12'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M5.10553 12L11.1055 6.00002L5.10553 0L3.84051 1.26501L7.681 5.10547L6.10352e-05 5.10547V6.8946L7.681 6.8946L3.84051 10.735L5.10553 12Z'
					className='fill-black group-hover:fill-green-200 transition-colors duration-200'
				/>
			</svg>
		</button>
	);
}
