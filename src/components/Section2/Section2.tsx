import {Section2} from "@/types";
import parse from 'html-react-parser';


const Section2 = ({data}: { data: Section2 }) => {
    return (
        <section className={"section_2"} id={"section2"}>
            <h2>{data.titre}</h2>
            <div className={"section_2__wrapper"}>
                {
                    data.items.map((item, index) => {
                        return (
                            <article key={index}>
                                <img src={item.image.url} alt={item.image.alt}/>
                                <h3>{item.titre}</h3>
                                <div>{parse(item.texte)}</div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
};

export default Section2