"use client"
import React, { useState, useEffect } from 'react';
import CountDown from './CountDown';
import { Time } from "@/types"


export default function CountDownLogic() {
  const [timeLeft, setTimeLeft] = useState<Time>();

  useEffect(() => {
    const targetDate = new Date('2024-06-15T23:59:59');

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let timeLeft: Time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }
      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <article>
      <CountDown time={timeLeft as Time} />
    </article>
  );
}
