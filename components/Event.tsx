import React, { FC } from "react";
import styles from "../styles/Home.module.css";
import { EventsData } from "../util/events";

interface EventProps {
	eventsData: EventsData[];
	headingColumns: string[];
}

export const Event: FC<EventProps> = ({ eventsData }: EventProps) => {
	var color = "black";
	var pastEvents: EventsData[] = [];
	var currEvents: EventsData[] = [];
	var pastEventsDivs: any = [];
	var currEventsDivs: any = [];

	eventsData.map((data, index) => {
		if (data.happened == true) {
			pastEvents.push(data);
		}
		if (data.happened == false) {
			currEvents.push(data);
		}
	});

	pastEvents.map((data, index) => {
		pastEventsDivs[index] = (
			<div className={styles.pastEventContainer} key={index}>
					<div className={styles.eventName}> {data.name} </div>
					<div className={styles.eventText}> {data.times} </div>
					<div className={styles.eventText}> {data.locations} </div>
			</div>
		);
	});

	currEvents.map((data, index) => {
		currEventsDivs[index] = (
			<div className={styles.currentEventContainer} key={index}>
					<div className={styles.eventName}> {data.name} </div>
					<div className={styles.eventText}> {data.times} </div>
					<div className={styles.eventText}> {data.locations} </div>
			</div>
		);
	});

	return (
		<div className={styles.eventPage}>
			{/* Current Events */}
			<div className={styles.upcomingEvents}>Upcoming Events</div>
			<div className={styles.eventGrid}>
				{currEventsDivs.map((r: any, index: number) => (
					<div key={index}>{r}</div>
				))}
			</div>

			{/* Past Events */}
			<div className={styles.pastEvents}>Past Events</div>
			<div className={styles.eventGrid}>
				{pastEventsDivs.map((r: any, index: number) => (
					<div key={index}>{r}</div>
				))}
			</div>
		</div>
	);
};
