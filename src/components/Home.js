import './home.css';
import { useEffect } from 'react';
import codeImage from '../image/code.png';

function Home() {
	useEffect(() => {
		function animate_text() {
			let delay = 100;
			let delay_start = 0;
			let contents, letters;

			document.querySelectorAll('.animate-text').forEach(function (elem) {
				contents = elem.textContent.trim();
				elem.textContent = '';
				letters = contents.split('');
				elem.style.visibility = 'visible';

				letters.forEach(function (letter, index_1) {
					setTimeout(function () {
						elem.textContent += letter;
					}, delay_start + delay * index_1);
				});

				delay_start += delay * letters.length;
			});
		}

		animate_text();
	}, []);

	return (
		<section className='sectionHome' id='home'>
			<div className='background'>
				<img src={codeImage} alt='Code background' />
				<div className='overlay'>
					<h1>
						Je suis{' '}
						<span className='animate-text'>Ludmilla ZEPHIR</span>
					</h1>
					<p className='text-home'>Bienvenue sur mon portfolio</p>
					<a href='#about' className='btn mt-3'>
						À propos de moi
					</a>
				</div>
			</div>
		</section>
	);
}

export default Home;
