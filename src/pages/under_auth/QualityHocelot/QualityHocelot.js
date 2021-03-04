import React from 'react';
import Page from '../Page';
import s from './QualityHocelot.module.css';
import Header from '../../../components/Header/Header';
import LinearProgressWithLabel from "../../../components/LinearProgress/LinearProgress";
import ChartWithLabel from "../../../components/ChartWithLabel/ChartWithLabel";
import DoubleChart from "../../../components/DoubleChart/DoubleChart";

const blocks = [
	{
		title: 'Geo Location',
		values: [
			{ label: 'GeoCheck OK', progress: 27 },
			{ label: 'GeoCheck KO', progress: 46, },
		]
	},
	{
		title: 'Identity Verifycation',
		values: [
			{ label: 'IdCheck OK', progress: 47 },
			{ label: 'IdCheck KO', progress: 16 },
		]
	},
	{
		title: 'Phone',
		values: [
			{ label: 'Reachable OK', progress: 62 },
			{ label: 'Reachable KO', progress: 71 },
		]
	},
	{
		title: 'Email',
		values: [
			{ label: 'Reachable OK', progress: 37 },
			{ label: 'Reachable KO', progress: 56 },
		]
	},
	{
		title: 'Age',
		values: [
			{ label: 'Legal age', progress: 37 },
			{ label: 'Underage status', progress: 56 },
		]
	}

];
const pantallaItems = ['Dashboard','Quality','Hocelot Quality','Enrichment','Model','Business case'];

const variables = [
	{img: 'img/Profile_1.png', title: 'Normalized Names', number: '89%'},
	{img: 'img/Home.png', title: 'Normalized Addresses', number: '70%'},
	{img: 'vector/Birth.svg', title: 'Normalized Birth Dates', number: '78%'},
	{img: 'vector/Calling.svg', title: 'Normalized Phone Numbers', number: '54%'}
];


const QualityHocelot = () => {
	return (
		<Page direction="column" justify="space-between">
			<Header/>
			<div className={s.content}>
				<div className={s.pantalla_items}>
					{
						pantallaItems.map(item => (
							<div key={item} className={s.pantalla_item}>{item}</div>
						))
					}
				</div>
				<div className={s.history}>
					<img src="vector/Chevron Right 1.svg" alt=""/>
					<span className={`${s.history} ${s.history_parth}`}>PROJECTS</span> \ NEW PROJECT \ QUALITY
				</div>
				<div className={s.title}>Project_Name.csv</div>

				<div className={s.wrap_edit}>
					<div className={s.title_edit}>yourCSVfile.csv</div>
					<button className={s.button_edit}>
						<div className={s.button_title}>Edit Columns</div>
					</button>
				</div>

				<div className={s.wrap_content}>
					<div className={s.wrap_variables}>
						<div className={s.variables_title}>
							Variables
						</div>
						<div className={s.wrap_name_row}>
							{
								variables.map(variables => (
									<div className={s.wrap_name}>
										<img src={variables.img}/>
										<div className={s.normalized_names_title}>{variables.title}</div>
										<div className={s.normalized_names}>
											<div className={s.normalized_number}>{variables.number}</div>
										</div>
									</div>
								))
							}

						</div>

						<div className={s.wrap_verification}>
							<div className={s.wrap_title}>Verification error</div>
							<div className={s.wrap_group}>
								<div className={s.wrap_emails}>
									<ChartWithLabel
										value={32}
										total={3.092}
										title="Emails"
										size={88}
										width={10}
									/>
								</div>
								<div className={s.wrap_emails}>
									<ChartWithLabel
										value={56}
										total={2.987}
										title="Phones"
										size={88}
										width={10}
									/>
								</div>
							</div>
						</div>
						<div className={s.wrap_verification}>
							<div className={s.wrap_title}>Validated error</div>
							<div className={s.wrap_group}>
								<div className={s.wrap_emails}>
									<ChartWithLabel
										value={12}
										total={3.092}
										title="Emails"
										size={88}
										width={10}
									/>
								</div>
								<div className={s.wrap_emails}>
									<ChartWithLabel
										value={45}
										total={2.987}
										title="Phones"
										size={88}
										width={10}
									/>
								</div>
							</div>
						</div>

					</div>

					<div className={s.wrap_total_records}>
						<div className={s.wrap_total_records_title}>
							<div className={s.total_records_title}>
								Total Records
							</div>
							<div className={s.wrap_total_records_count}>
								<div className={s.total_records_count}>40.000</div>
								<div className={s.total_records}>Records</div>
							</div>
						</div>
						<div className={s.total_records_diagramma}>
							<div className={s.records_diagramma}>

								<DoubleChart
									size={225}
									width={10}
									values={[ { title: 'Total analyzed', value: 80 }, { value: 65 } ]}
									colors={[ [ '#0D4097', 'transparent' ], [ '#347AE6', 'transparent' ] ]}
								/>

							</div>
						</div>
						<div className={s.wrap_analyzed}>
							<div className={s.wrap_total_analyzed}>
								<img src='vector/Ellipse 717.svg'/>
								<div className={s.useful_records_text}>Total analyzed</div>
							</div>
							<div className={s.wrap_useful_records}>
								<img src='vector/Vector_i.svg'/>
								<div className={s.useful_records_text}>Useful records</div>
							</div>
						</div>
					</div>

					<div style={{ display: 'flex', flexDirection: 'column' }}>
						{
							blocks.map(block => {
								return (          <div key={block.title} style={{ marginBottom: 20 }} className={s.wrap_geo_localion}>
									<div className={s.geo_localion_grafica}>

										<div className={s.title_grafica}>{block.title}</div>
										{
											block.values.map((value, index) => {
												return (
													<div style={{marginBottom:index?0:11}} key={value.label}>
														<div style={{marginBottom:5}} htmlFor="">{value.label}</div>
														<LinearProgressWithLabel
															classes={{root: s.progress_root, label:s.label, bar: s[ `bar${index + 1}` ] }} value={value.progress} units="%"/>
													</div>)
											})
										}
									</div>
								</div> )
							})
						}
					</div>
				</div>
			</div>
		</Page>

	);
};

export default QualityHocelot;




