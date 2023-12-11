import {Section4} from "@/types";
import parse from 'html-react-parser';


function Section4({data}: { data: Section4 }) {
    return (
        <section className={"section_4"} id={"section_4"}>
            <h2 className={"section_4__title"}>{data.titre}</h2>
            <img
                src={data.image.url}
                alt={data.image.alt}
                className={"section_4__image"}
            />
            <div>
                {parse(data.texte)}
            </div>
        </section>
    );
}

export default Section4;
