import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { Fragment, useEffect, useState } from "react";
import { data } from '../util/events';
import { Event } from "../components/Event";

export default function Events() {

  const [eventsData, setEventsData] = useState(data);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setEventsData(data);
      setCount(count + 1);
    }, 300000);
  }, [count]);

  return (
    <div className={styles.events}>
      <Head>
        <title>Schedule</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Fragment>
          <Event
            eventsData={eventsData}
            headingColumns={["name", "times", "locations", "details"]}
          />
        </Fragment>
    </div>
  );
}