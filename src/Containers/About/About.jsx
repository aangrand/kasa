import "./About.scss";
import { Component } from "react";
import Collapse from "../../Components/Collapse/Collapse";
import guidelines from "../../data/guidelines.json";

export default class About extends Component {
	render() {
		return (
			<div className="about">
				<section className="about__guidelines">
					{guidelines.map((guideline) => {
						return (
							<Collapse title={guideline.title} key={guideline.id} content={guideline.description} />
						);
					})}
				</section>
			</div>
		);
	}
}