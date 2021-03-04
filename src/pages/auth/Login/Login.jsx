import React from 'react';
import s from './Login.module.css';

const Login = () => {
	return (
		<div className={`container ${s.signin}`}>
			<div className={s.logo}>
				<img src="vector/H.svg"/>
				<img src="vector/O.svg"/>
				<img src="vector/C.svg"/>
				<img src="vector/E.svg"/>
				<img src="vector/L.svg"/>
				<img src="vector/O.svg"/>
				<img src="vector/T.svg"/>
			</div>

			<div className={s.inner_section} style={{ paddingLeft: 23 }}>
				<div>
					<div className={s.left_side_heading}>Just a few clicks &nbsp;&nbsp; away from &nbsp;&nbsp; improving your data
						thanks to our &nbsp;&nbsp; products
					</div>

					<div style={{ marginTop: 38 }}>

						<div className={s.left_side_item_row}>
							<div>
								<img src="vector/Path_34168.svg"/>
								Dinamic Risk Modeler
							</div>

							<div>
								<img src="vector/Chart.svg"/>
								Collection Buster
							</div>
						</div>

						<div className={s.left_side_item_row} style={{ marginTop: 35 }}>
							<div>
								<img src="vector/Discount.svg"/>
								Dinamic Risk Modeler
							</div>

							<div>
								<img src="vector/Graph.svg"/>
								Collection Buster
							</div>
						</div>

					</div>

				</div>

			</div>

			<div className={`${s.inner_section} ${s.right_side_section}`}>
				<div style={{ width: 502 }}>

					<div className={s.social_auth_row}>
						<div className={`${s.social_auth} ${s.social_google} ${s.social_text}`}>
							<img src="vector/Shape Copy 1.svg"/>
							Google
						</div>

						<div className={`${s.social_auth} ${s.social_linkedin} ${s.social_text}`}>
							<img src="vector/Group.svg"/>
							Linkedin
						</div>
					</div>

					<div className={s.auth_section_or}>OR</div>

					<div className={s.input}>
						<img src="vector/Message.svg"/>
						<input type="email" placeholder="Email"/>
					</div>

					<div className={s.input}>
						<img src="vector/Lock.svg"/>
						<input type="password" placeholder="Password"/>
					</div>

					<div className={s.forgot_password}>
						Forget password?
						<a href="#"> Click here </a>
					</div>

					<button className={s.login_button}>
						Log in
					</button>

					<div className={s.create_account}>
						Don't nave an account yet?
						<a href="#"> Create account </a>
					</div>


				</div>
			</div>
		</div>
	);
};

export default Login;
