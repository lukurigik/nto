import CodeStyle from "./CodeStyle";
import Nav from "./Nav";

export default function Html({ num = 0 }) {

  //! Код каждой демонстрации
	const htmlInfo = [
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
	];

	return (
		<>
			
			<div className='code'>
				<div className='code__out'>
					<div className='code__info'>
						{htmlInfo[num].split("\n").length} строк
            <div className='code__nav'>
              <Nav num={num}></Nav>
            </div>
            
					</div>
					<div className='code__container'>
						<CodeStyle colStr={htmlInfo[num].split("\n").length}></CodeStyle>
						<pre className='code__pre'>{htmlInfo[num]}</pre>
					</div>
				</div>
			</div>
		</>
	);
}
