"use client";
import { Fugaz_One } from "next/font/google";
import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import { useAuth } from "@/context/AuthContext";
import Login from "./Login";
import Loading from "./Loading";
import StatusDisplay from "./StatusDisplay";
import MoodButtons from "./MoodButtons";
import { calculateStatuses, updateFirebase, updateMoodData } from "@/utils";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Dashboard() {
  const { currentUser, userDataObject, setUserDataObject, loading } = useAuth();
  const [data, setData] = useState({});
  const now = new Date();

  useEffect(() => {
    if (currentUser && userDataObject) {
      setData(userDataObject);
    }
  }, [currentUser, userDataObject]);

  if (loading) return <Loading />;
  if (!currentUser) return <Login />;

  const statuses = calculateStatuses(data, now);
  const moods = {
    "&*@#$": "😭",
    Sad: "😢",
    Existing: "😶",
    Good: "😃",
    Elated: "😍",
  };

  const handleSetMood = async (mood) => {
    const newData = updateMoodData(mood, now, userDataObject);
    setData(newData);
    setUserDataObject(newData);
    await updateFirebase(currentUser.uid, newData);
  };

  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16">
      <StatusDisplay statuses={statuses} />
      <h4 className={`${fugaz.className} text-5xl sm:text-6xl md:text-7xl text-center`}>
        How do you <span className="textGradient">feel</span> today?
      </h4>
      <MoodButtons moods={moods} handleSetMood={handleSetMood} />
      <Calendar completeData={data} handleSetMood={handleSetMood} />
    </div>
  );
}


