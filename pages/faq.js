import React from "react";
import Header from "../components/header";
import Image from "next/image";

import { questions } from "../util/questions";
import styles from "../styles/Home.module.css";

export default function Faq() {
	let idx = 0;
	const listItems = questions.map((question) => (
		<div key={idx++} className={styles.faq}>
			<div className={styles.faqQuestionContainer}>
				<div className={styles.faqQuestion}>{question.q}</div>
			</div>

			<div className={styles.faqAnswerContainer}>
				<ul>
					{question.a.map((ans) => (
						<li className={styles.faqAnswer} key={idx++}>
							{ans}
						</li>
					))}
				</ul>
			</div>

			<Image src="/design_black.png" height={50} width={180} alt="gradient" />
		</div>
	));

	return (
		<div>
			<Header title="FAQ" />
			<div className={styles.faqList}>{listItems}</div>
		</div>
	);
}
