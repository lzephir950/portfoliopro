import './contact.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const templateParams = {
			from_email: email,
			message: message,
		};

		emailjs
			.send(
				'service_5zztitp',
				'template_217b7x3',
				templateParams,
				'9FGy1TUTWTNgckqwR'
			)
			.then(
				(result) => {
					console.log(result.text);
					alert('Message envoyé !');
					setEmail('');
					setMessage('');
				},
				(error) => {
					console.log(error.text);
					alert("Erreur lors de l'envoi du message.");
				}
			);
	};

	return (
		<section className='contact-section py-5' id='contact'> 
			<div className='animated-bg'></div>

			<div className='contact-container container'>
				<div className='text-center position-relative mb-5'>
					<h1 className='big2'>Me contacter</h1>
					<h1 className='small2'>Contact</h1>
				</div>

				<div className='row g-4 contact-info justify-content-center text-center mb-5'>
					<div className='col-12 col-md-4'>
						<div className='icon mb-3'>
							<i className='bi bi-geo-alt-fill'></i>
						</div>
						<p className='mb-0 fw-bold'>Nanterre</p>
					</div>

					<div className='col-12 col-md-4'>
						<div className='icon mb-3'>
							<i className='bi bi-telephone-fill'></i>
						</div>
						<p className='mb-0 fw-bold'>07.80.47.51.16</p>
					</div>

					<div className='col-12 col-md-4'>
						<div className='icon mb-3'>
							<i className='bi bi-envelope-fill'></i>
						</div>
						<p className='mb-0 fw-bold'>
							Ludmilla.zephir@gmail.com
						</p>
					</div>
				</div>

				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6'>
						<form onSubmit={handleSubmit}>
							<div className='mb-3'>
								<label htmlFor='email' className='form-label'>
									Adresse mail
								</label>
								<input
									type='email'
									className='form-control'
									id='email'
									placeholder='Exemple: joedon@gmail.com'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className='mb-3'>
								<label htmlFor='message' className='form-label'>
									Message
								</label>
								<textarea
									className='form-control'
									id='message'
									rows='4'
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									required
								></textarea>
							</div>
							<div className='text-center'>
								<button type='submit' className='btn mt-3'>
									Envoyer
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
