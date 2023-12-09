'use client'

import Services from "./Services";
import {Section3} from "@/types";
import {useEffect} from "react";

function Section3({data}: { data: Section3 }) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const floating_btn = document.querySelector('.take_rdv_btn') as HTMLElement;
                console.log(floating_btn)
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        floating_btn.classList.add('hidden');
                    } else {
                        floating_btn.classList.remove('hidden');
                    }
                });
            }
        );
        const el = document.querySelector('.section_3__container_btn');
        observer.observe(el!);
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={"section_3"} id={"section_3"}>
            <section className={"section_3__container"} id={"section_3"}>
                <h2 className={"section_3__container_title"}>{data.titre}</h2>
                <Services massages={data.items}/>
                <div className={"btn section_3__container_btn"}>
                    <a
                        className={"btn_content"}
                        href={"https://cal.com/aucoeurdesoi"}
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
