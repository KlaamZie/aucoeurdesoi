import {Section6} from "@/types";
import parse from "html-react-parser";


const Section6 = ({data}: { data: Section6 }) => {
    return (
        <section className={"section_6"} id={"section6"}>
            {parse(data.texte)}
        </section>
    )
};

export default Section6