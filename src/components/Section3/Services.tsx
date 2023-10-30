import {useRef} from "react";
import {Massage} from "@/types";
import parse from 'html-react-parser';


function Services({massages}: { massages: Massage[] }) {
    const buttons_ref = useRef<SVGSVGElement[]>([]);
    const content_ref = useRef<HTMLElement[]>([]);

    function openSection(index: number) {
        const button = buttons_ref.current[index];
        const element = content_ref.current[index];
        if (element) {
            const activePanelIsOpened = button.getAttribute("aria-expanded");
            if (activePanelIsOpened === "true") {
                button.setAttribute("aria-expanded", "false");
                element.setAttribute("aria-hidden", "true");
            } else {
                button.setAttribute("aria-expanded", "true");
                element.setAttribute("aria-hidden", "false");

                // close other sections
                for (let i = 0; i < buttons_ref.current.length; i++) {
                    if (i !== index) {
                        const button = buttons_ref.current[i];
                        const element = content_ref.current[i];
                        if (button.getAttribute("aria-expanded") === "true" && element.getAttribute("aria-hidden") === "false") {
                            button.setAttribute("aria-expanded", "false");
                            element.setAttribute("aria-hidden", "true");
                        }
                    }
                }
            }
        }
    }

    return (
        <div className={"services"}>
            {
                massages.map((massage, index) => {
                    return <div className={"services__item"} onClick={() => openSection(index)} key={index}>
                        <div className={"services__item_title"}>
                            <h3 className={"services__item_title_text"}>{massage.titre}</h3>
                            <svg
                                width="25"
                                height="13"
                                viewBox="0 0 25 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-expanded="false"
                                ref={(el) => (buttons_ref.current[index] = el!)}
                            >
                                <path
                                    d="M2.9375 0L12.5 7.96837L22.0625 0L25 2.45314L12.5 12.8921L0 2.45314L2.9375 0Z"
                                    fill="#54452C"
                                />
                            </svg>
                        </div>
                        <div
                            className={"services__item_content"}
                            aria-hidden="true"
                            ref={(el) => (content_ref.current[index] = el!)}
                        >
                            <div>
                                {parse(massage.texte)}
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default Services;
