import React from "react";

export default function Instructions({ title, steps}) {
    return (
        <section className="instructions">
            <h2>{title}</h2>
            <ol>
                {steps.map((step, i) => (
                    <li key={i}>{step}</li>
                ))}
            </ol>
        </section>
    )
}