import React from 'react';

const PatternPage = ({pattern}) => {
	return (
		<div className='patternPage'>
			<div>
				<img src={pattern.image}/>
				<img src={pattern.image}/>
				<img src={pattern.image}/>
				<img src={pattern.image}/>
			</div>
			<article>
				<h1>{pattern.name}</h1>
				<p>{pattern.description}</p>
			</article>
		</div>
	)
}

export default PatternPage;
