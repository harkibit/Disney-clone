import React from 'react'
import Movies from "../components/Movies";
import Viewers from "../components/Viewers";

export default function Home() {
    return (
        <div>
            <Viewers />
            <Movies />
        </div>
    )
}
