import React from "react";
// importing Card Component
import Card from "./Card";

// function to Generate the Portfolio component
export default function Portfolio() {
    return (
        <div>
            {/* using props to generate cards using the Card component */}
            <Card img="../img/pexels-pixabay-209831.jpg" title="Weather Dashboard App" />
            <Card img="../img/pexels-pixabay-39584 (1).jpg" title="Random Password Generator" />
            <Card img="../img/pexels-markus-spiske-1089438.jpg" title="Coding Quiz App" /> 
            <Card img="../img/pexels-sora-shimazaki-5668471.jpg" title="Workday Planning App" />
        </div>
        )

}