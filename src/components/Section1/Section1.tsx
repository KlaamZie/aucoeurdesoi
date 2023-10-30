'use client'
import {Section1} from "@/types";

const Section1 = ({data}: { data: Section1 }) => {
    const scrollToSection2 = () => {
        document.getElementById("section2")!.scrollIntoView({behavior: "smooth"});
    };
    return (
        <section className={"section_1"} id={"section_1"}>
            <div className={"section_1__logo"}>
                <img
                    src={data.logo.url}
                    alt={data.logo.alt}
                />
                <h2>Au cœur de soi</h2>
            </div>

            <h2>{data.titre}</h2>
            <div className={"section_1__wrapper"}>
                <div className={"section_1__wrapper_image"}>
                    <img
                        src={data.image.url}
                        alt={data.image.alt}
                    />
                </div>
            </div>
            <h1>
                {data.sousTitre}
            </h1>
        </section>
    );

}

export default Section1;