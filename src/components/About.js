import photoImage from '../image/photo2.png';
import './about.css';

function About() {
	return (
		<section id='about' className='sectionAbout py-5'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-12 col-md-6 mb-4 mb-md-0'>
						<img
							src={photoImage}
							alt='Profil'
							className='img-fluid rounded'
						/>
					</div>
					<div className='col-12 col-md-6'>
						<div className='card-body position-relative'>
							<h1 className='big'>À propos</h1>
							<h1 className='mb-3 small'>À propos de moi</h1>
							<p className='card-text text'>
								Après deux années de formation en BTS SIO option
								SLAM (Solutions Logicielles et Applications
								Métiers), je me passionne pour le développement
								web et la conception de logiciels. Bien que je
								n’aie pas validé le diplôme, j’ai acquis des
								compétences solides en programmation et en
								conception d’applications. Je souhaite
								poursuivre mes études en Bachelor spécialisé
								dans le développement web, afin de renforcer mes
								compétences techniques et approfondir mes
								connaissances. Au cours de ma formation, j’ai eu
								l’opportunité de réaliser plusieurs projets,
								personnels et professionnels, qui m’ont permis
								de mettre en pratique mes acquis et de
								développer mon autonomie ainsi que ma rigueur de
								travail.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
