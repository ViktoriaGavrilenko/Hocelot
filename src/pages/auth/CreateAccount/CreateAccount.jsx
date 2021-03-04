import React from 'react';
import s from './CreateAccount.module.css';

const fields = [
	{
		key: 'firstName',
		title: 'First Name',
		type: 'text',
		img: 'img/Profile_1.png',

	},
	{
		key: 'lastName',
		title: 'Last Name',
		type: 'text',
		img: 'img/Profile_1.png',

	},
	{
		key: 'email',
		title: 'Email',
		type: 'email',
		img: 'vector/Message.svg',

	},
	{
		key: 'password',
		title: 'Create Password',
		type: 'password',
		img: 'vector/Lock.svg',

	},
	{
		key: 'confirmPassword',
		title: 'Confirm your password',
		type: 'password',
		img: 'vector/Lock.svg',
	},
];

const CreateAccount = () => {
	return (
		<div className={`container ${s.signup}`}>
			<div className={s.logo}>
				<img src="vector/H.svg"/>
				<img src="vector/O.svg"/>
				<img src="vector/C.svg"/>
				<img src="vector/E.svg"/>
				<img src="vector/L.svg"/>
				<img src="vector/O.svg"/>
				<img src="vector/T.svg"/>
			</div>

			<div className={s.inner_section}>
				<div className={s.auth_row}>
					Already a user? ---- LOG IN
				</div>
				<div className={s.inner_section_content}>
					<div className={s.content}>

						<div className={s.signup_title}>Sign up whit hocelot</div>

						{
							fields.map(field => (
								<div key={field.key} className={s.input}>
									<img src={field.img} style={{width:30}}/>
									<input type={field.type} placeholder={field.title}/>
								</div>
							))
						}

						<div className={s.terms_section}>
							By clicking Create Account, you agree to the Hocelot's
							<a href="#"> Terms of Use Privacity Policy</a> and <a href="">Cookie Policity</a>
						</div>
						<button className={s.signup_button}>Create account</button>

					</div>
				</div>
			</div>

		</div>
	);
};
export default CreateAccount;
