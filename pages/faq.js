import React, { FC, useState } from "react";
import { people } from "../util/questions";

export default function Faq() {
	const listItems = people.map((person) => (
		<li key={person.number}>
			<p>
				<b>{person.question}</b>
			</p>
			<p>
				<ol>{person.answera}</ol>
				<ul>{person.answeri}</ul>
				<ul>{person.answerii}</ul>
				<ul>{person.answeriii}</ul>
				<ol>{person.answerb}</ol>
				<ol>{person.answerc}</ol>
			</p>
		</li>
	));

	return (
		<body>
			<h2>FAQ</h2>
			<ul>{listItems}</ul>

			<h3>Further questions?</h3>
			<p>Email us at: <strong>helloworldpurdue@gmail.com</strong></p>
		</body>
	);
}
