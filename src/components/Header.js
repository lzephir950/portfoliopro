import './header.css';

function Header() {
	return (
		<header className='sectionHeader'>
			<nav className='navbar navbar-expand-md navbar-dark'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='#home'>
						Mon Portfolio
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse justify-content-center'
						id='navbarNavAltMarkup'
					>
						<div className='navbar-nav'>
							<a
								className='nav-link'
								aria-current='page'
								href='#about'
							>
								A propos
							</a>
							<a className='nav-link' href='#competences'>
								Compétences
							</a>
							<a className='nav-link' href='#projects'>
								Réalisations
							</a>
							<a className='nav-link' href='#contact'>
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
