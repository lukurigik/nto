export default function CodeStyle({ colStr = 40 }) {
	return (
		<>
			<div>
				<div className='code__style'>
					{Array(+colStr)
						.fill("")
						.map((item, i) => {
							return (
								<div className='code__col' key={i}>
									<p>{i + 1}</p>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}
