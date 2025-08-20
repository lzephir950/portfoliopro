import './competences.css';
import photoImage from '../image/cv2.jpg';

function Competences() {
	return (
		<section id='competences' className='sectionAbout py-5'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 text-center mb-5 position-relative'>
						<h1 className='big2'>Compétences</h1>
						<h1 className='small2'>Mes compétences</h1>
					</div>

					<div className='col-12 col-md-6 mb-4'>
						<section className='skills-section'>
							<div className='skill'>
								<span>HTML</span>
								<div className='skill-bar'>
									<div className='skill-fill fill-html'></div>
								</div>
							</div>
							<div className='skill'>
								<span>CSS</span>
								<div className='skill-bar'>
									<div className='skill-fill fill-css'></div>
								</div>
							</div>
							<div className='skill'>
								<span>PHP</span>
								<div className='skill-bar'>
									<div className='skill-fill fill-js'></div>
								</div>
							</div>
							<div className='skill'>
								<span>Laravel</span>
								<div className='skill-bar'>
									<div className='skill-fill fill-php'></div>
								</div>
							</div>
							<div className='skill'>
								<span>Symfony</span>
								<div className='skill-bar'>
									<div className='skill-fill fill-php'></div>
								</div>
							</div>
							<div className='skill'>
								<span>Java</span>
								<div className='skill-bar'>
									<div className='skill-fill fill-java'></div>
								</div>
							</div>
							<div className='skill'>
								<span>Java FX</span>
								<div className='skill-bar'>
									<div className='skill-fill fill-javafx'></div>
								</div>
							</div>
						</section>
					</div>

					<div className='col-12 col-md-6 text-center'>
						<img
							src={photoImage}
							alt='Profil'
							className='img-fluid rounded image'
						/>
						<a
							href='/CV.pdf'
							className='btn2 btn-primary d-inline-block mt-3'
							download
						>
							Télécharger mon CV
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Competences;
