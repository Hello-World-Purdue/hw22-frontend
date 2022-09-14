import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { data } from '../util/events';
import { Event } from "../components/Event";

export default function Schedule() {

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
          <Event
            eventsData={eventsData}
            headingColumns={["name", "times", "locations", "details"]}
          />
    </div>
  );
}