'use client'

import Services from "./Services";
import {Section3} from "@/types";

function Section3({data}: { data: Section3 }) {
    return (
        <div className={"section_3"}>
            <section className={"section_3__container"} id={"section_3"}>
                <h2 className={"section_3__container_title"}>{data.titre}</h2>
                <Services massages={data.items}/>
                <div className={"section_3__container_btn"}>
                    <a
                        className={"section_3__container_btn_content"}
                        href={"https://cal.com/enzo-viry-hzlkwy"}
                        target={"_blank"}
                    >
                        {data.bouton}
                    </a>
                </div>
            </section>
            <img
                src={data.image.url}
                alt={data.image.alt}
                className={"section_3__image"}
            />
        </div>
    );
}

export default Section3;
