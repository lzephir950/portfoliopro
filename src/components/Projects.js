import './projects.css';
import logoLaravel from '../image/laravel1.png';
import logoCss from '../image/css.png';
import logoHtml from '../image/html.png';
import logoPhp from '../image/php.png';
import logoJs from '../image/js.png';
import logoJava from '../image/java.png';
import logoJavafx from '../image/javafx.png';
import logoWordpress from '../image/wordpress2.png';
import logoElementor from '../image/elementor.png';
import projetImage from '../image/ohmycat.png';
import biblionest from '../image/biblionest.png';
import todolist from '../image/todolist.png';
import gefodi from '../image/gefodi.png';

function Projects() {
	return (
		<section id='projects' className='py-5'>
			<div className='container'>
				<div className='text-center position-relative mb-5'>
					<h1 className='big2'>Réalisations</h1>
					<h1 className='small2'>Réalisations</h1>
				</div>
				<div className='row'>
					{/* OhMyCat */}
					<div className='col-12 col-sm-6 col-md-4 mb-4'>
						<div className='card project-card text-white'>
							<img
								src={projetImage}
								alt='OhMyCat'
								className='project-img'
							/>
							<div className='overlay2 d-flex flex-column justify-content-center align-items-center'>
								<h4>OhMyCat</h4>
								<div className='d-flex gap-2'>
									<img
										src={logoJs}
										alt='JavaScript'
										className='imgLogo'
									/>
									<img
										src={logoCss}
										alt='CSS'
										className='imgLogo'
									/>
									<img
										src={logoHtml}
										alt='HTML'
										className='imgLogo'
									/>
								</div>
								<a
									href='https://bitbucket.org/personnelspace/ohmycat/src/main/'
									className='btn mt-3'
								>
									Voir plus
								</a>
							</div>
						</div>
					</div>

					{/* Biblionest */}
					<div className='col-12 col-sm-6 col-md-4 mb-4'>
						<div className='card project-card text-white'>
							<img
								src={biblionest}
								alt='Biblionest'
								className='project-img'
							/>
							<div className='overlay2 d-flex flex-column justify-content-center align-items-center'>
								<h4>Biblionest</h4>
								<div className='d-flex gap-2'>
									<img
										src={logoLaravel}
										alt='Laravel'
										className='imgLogo'
									/>
									<img
										src={logoPhp}
										alt='PHP'
										className='imgLogo'
									/>
								</div>
								<a
									href='https://bitbucket.org/personnelspace/biblionest/src/develop/'
									className='btn mt-3'
								>
									Voir plus
								</a>
							</div>
						</div>
					</div>

					{/* Todolist */}
					<div className='col-12 col-sm-6 col-md-4 mb-4'>
						<div className='card project-card text-white'>
							<img
								src={todolist}
								alt='Todolist'
								className='project-img'
							/>
							<div className='overlay2 d-flex flex-column justify-content-center align-items-center'>
								<h4>Todolist</h4>
								<div className='d-flex gap-2'>
									<img
										src={logoJava}
										alt='Java'
										className='imgLogo'
									/>
									<img
										src={logoJavafx}
										alt='JavaFX'
										className='imgLogo'
									/>
								</div>
								<a
									href='https://github.com/lzephir950/Projet_lourd'
									className='btn mt-3'
								>
									Voir plus
								</a>
							</div>
						</div>
					</div>

					{/* GEFODI */}
					<div className='col-12 col-sm-6 col-md-4 mb-4'>
						<div className='card project-card text-white'>
							<img
								src={gefodi}
								alt='GEFODI'
								className='project-img'
							/>
							<div className='overlay2 d-flex flex-column justify-content-center align-items-center'>
								<h4>GEFODI</h4>
								<div className='d-flex gap-2'>
									<img
										src={logoWordpress}
										alt='Wordpress'
										className='imgLogo'
									/>
									<img
										src={logoElementor}
										alt='Elementor'
										className='imgLogo'
									/>
								</div>
								<a
									href='https://gefodi.io/'
									className='btn mt-3'
									target='_blank'
									rel='noreferrer'
								>
									Voir plus
								</a>
							</div>
						</div>
					</div>

					{/* Projet générique */}
					{/* <div className='col-12 col-sm-6 col-md-4 mb-4'>
						<div className='card project-card text-white'>
							<div
								style={{
									background: '#333',
									height: '100%',
									borderRadius: '8px',
								}}
							></div>
							<div className='overlay2 d-flex flex-column justify-content-center align-items-center'>
								<h5>Nom du projet</h5>
								<img
									src={logoLaravel}
									alt='Laravel'
									className='imgLogo'
								/>
								<a href='#' className='btn mt-2'>
									Voir plus
								</a>
							</div>
						</div>
					</div> */}

					{/* Autre projet générique */}
					{/* <div className='col-12 col-sm-6 col-md-4 mb-4'>
						<div className='card project-card text-white'>
							<div
								style={{
									background: '#333',
									height: '100%',
									borderRadius: '8px',
								}}
							></div>
							<div className='overlay2 d-flex flex-column justify-content-center align-items-center'>
								<h5>Nom du projet</h5>
								<img
									src={logoLaravel}
									alt='Laravel'
									className='imgLogo'
								/>
								<a href='#' className='btn mt-2'>
									Voir sur GitHub
								</a>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
}

export default Projects;
