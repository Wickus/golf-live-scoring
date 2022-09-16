import type {NextPage} from 'next'
import HeadingSection from "../components/heading-section";
import ProfileComponent from "../components/profile-component";
import RoundSection from "../components/round-section";
import ScoreCard from "../components/score-card/score-card";
import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {course} from "../lib/config";

export const Context = createContext({
    course:course
})

const Home: NextPage = () => {
    const [state, updateState] = useState({
        course:course
    })
    useEffect(()=>{
        axios.get("/round-1.json").then((res)=>{
            updateState({
                ...state, course: res.data
            })
        })
    },[])

    return (
        <Context.Provider value={state}>
            <main className={"bg-gray-800 text-white w-full h-screen flex items-start justify-center p-5"}>
                <div className={"w-full max-w-[900px] mt-10"}>
                    <HeadingSection/>
                    <ProfileComponent/>
                    <RoundSection />
                    <ScoreCard/>
                </div>
            </main>
        </Context.Provider>
    )
}

export default Home
