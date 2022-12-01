import React from "react";
import CategorieBoxes from "./CategoriesBoxes";
import "./Details.css";

function Details() {

    //Logica here

    return (
        <>
            <section className="flex">
                <h1>
                    This is Details component
                </h1>
                <CategorieBoxes NameCategorie = "Test" />
            </section>
        </>
    )
}

export default Details;