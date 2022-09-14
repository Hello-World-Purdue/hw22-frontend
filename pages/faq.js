import React from "react";
import { questions } from "../util/questions";
import styles from "../styles/Login.module.css";

export default function Faq() {
	let idx = 0;
	const listItems = questions.map((question) => (
		<div key={idx++}>
			<div className="styles.faqQuestion">{question.q}</div>
			
			<ul>
				{	
					question.a.map((ans) => (
					<li key={idx++}>{ans}</li>
				))}
			</ul>
		</div>
	));

	return (
		<div>
			<h2>FAQ</h2>
			{listItems}
			
			<h3>Further questions?</h3>
			<p>
				Email us at: <strong>helloworldpurdue@gmail.com</strong>
			</p>
		</div>
	);
}
