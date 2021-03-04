import React from 'react';
import Page from '../Page';
import s from './Solutions.module.css';
import Header from '../../../components/Header/Header';
import Steps from '../../../components/Steps/Steps';

const stepItems = [
	{
		key: 'solution',
		title: 'solution',
	},
	{
		key: 'industry',
		title: 'industry',
	},
	{
		key: 'product',
		title: 'product',
	},
	{
		key: 'your fire',
		title: 'your fire',
	},
	{
		key: 'upload complete',
		title: 'upload complete',
	},
	{
		key: 'sort columbns',
		title: 'sort columbns',
	},
];


const solutions=[
	{
		header:{
			title:'Buy Matcher',
			subtitle:'Increases conversion rate during sales cylcle.',
			img:'vector/Graph_1.svg',
		},
		options:[
			{
				title:'Do you want to sell more?',
				subtitle:'Locate your customers with a higher purchase propensity'
			},
			{
				title:'Do you want to spend less?',
				subtitle:'Change your strategy with your low purchase propensity customers'
			},
			{
				title:'Do you want to sell better?',
				subtitle:'Accept well, impact better'
			},
		]
	},
	{
		header:{
			title:'Dynamic Risk Modeler',
			subtitle:'Default catch during adminssion',
			img:'vector/Activity_1.svg',
		},
		options:[
			{
				title:'Do you want to accept better?',
				subtitle:'Optimize wrongly denied operations'
			},
			{
				title:'Want to deny better?',
				subtitle:'Reduce default levels'
			},
			{
				title:'Want to deny better?',
				subtitle: 'Strike maximum return by operations'
			},
		]
	},
	{
		header:{
			title:'Fraud Buster',
			subtitle:'Detects and prevents from fraudulent requests during approval',
			img:'vector/Discount_1.svg',
		},
		options:[
			{
				title:'Do you want to reduce phishing fraud?',
				subtitle:'Avoid fake customers'
			},
			{
				title:'Want to deny better?',
				subtitle:'Avoid data inconsistency'
			},
			{
				title:'Do you want to sell better?',
				subtitle:'Strike maximum benefit by operation'
			},
		]
	},
	{
		header:{
			title:'Collection Booster',
			subtitle:'Imprivers recoverty procedure',
			img:'vector/Chart_2.svg',
		},
		options:[
			{
				title:'Want to collect better?',
				subtitle:'Implement a strategy to increase operating benefit'
			},
			{
				title:'Do you want to recover more?',
				subtitle:'Focus your highest contactability VS collectability rate customers'
			},
			{
				title: 'Do you want to spend less?',
				subtitle: 'Change your strategy with low collectability rate customers'
			},
		]
	}
]

const Solutions = () => {
	return (
		<Page direction="column" justify="space-between">
			<Header/>

			<div className={s.content}>
				<div className={s.history}>
					<img src="vector/Chevron Right 1.svg" alt=""/>
					PROJECTS \ NEW PROJECT
				</div>
				<div className={s.title}>What can we do for you?</div>
				<div className={s.subtitle}>Improve results during all potential and real customer life cycle.</div>
				<div className={s.solution_choices}>

					{
						solutions.map(solution => (
							<div className={s.solution_item}>
								<img src="vector/Vector_1.svg" alt="" className={s.info_icon}/>
								<div className={s.solution_item_header}>
									<div className={s.solution_item_header_title}>
										{solution.header.title}
									</div>
									<div className={s.solution_item_header_subtitle}>
										{solution.header.subtitle}
									</div>
									<img src={solution.header.img}/>
								</div>

								{
									solution.options.map(option => (
										<div className={s.solution_item_text}>
											<div className={s.solution_item_text_title}>
												{option.title}
											</div>
											{option.subtitle}
										</div>
									))
								}
							</div>
						))
					}

				</div>
			</div>

			<Steps>
				<button className={`${s.step_button} ${s.back}`}>
					<img src="vector/Chevron Right 1.svg" alt=""/>
					back step
				</button>
				<div className={s.steps_items}>
					{
						stepItems.map(item => (
							<div key={item.key} className={s.step_item}>{item.title}</div>
						))
					}
				</div>
				<button className={`${s.step_button} ${s.next}`}>
					next step
					<img src="vector/Chevron Right 1 (1).svg" alt=""/>
				</button>
			</Steps>
		</Page>

	);
};

export default Solutions;


