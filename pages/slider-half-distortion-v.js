import React from "react";
import Layout from "../layout/Layout";
import SliderPortfolio from "../components/slider-portfolio/SliderPortfolio";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";

function Home() {



    return (
        <Layout modelRight={{children: <ModalContact/>, propsModal: {textBtn: "Contact"}}}>
            <Head>
                <title>Portfolio  | Eremia Creative Portfolio Multi-Purpose</title>
            </Head>
            <SliderPortfolio
                typeBg="half-image"
                webgel
                className={"align-items-center pb-80"}
                classNameSlider={"content-left"}
                webgelOptions={{
                    displacement: "/img/displacement/8.jpg",
                    speedIn: 3.5,
                }}
                optionSlider={{
                    direction : "vertical"
                }}
                alignControlNav="start"
                metaData={{hasSeparator: false , separateCat:null}}

                tag="header"
            />
        </Layout>
    );
}

export default Home;
