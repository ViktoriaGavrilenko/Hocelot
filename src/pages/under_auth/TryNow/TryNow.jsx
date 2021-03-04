import React from 'react';
import Page from '../Page';
import s from './TryNow.module.css';

const TryNow = () => {
	return (
		<Page justify="center" align="center">
			<div className={s.content}>
				<div className={s.try_now}>
					TRY NOW!
				</div>

				<div className={s.ask}>
					What can we do for you?
				</div>

				<div className={s.text}>
					Improve results during all potential and real customer life cycle
				</div>

				<button className={s.create_project_button}>
					Create New Project
				</button>

			</div>

			<div className={s.help_section}>
					<span className={s.help_title}>
						Help Center
					</span>
				<span className={s.help_text}>
						If you have any questions, contact us!
					</span>
				<button className={s.button_contact_us}>
					Contact us
				</button>
			</div>

		</Page>
	);
};

export default TryNow;
