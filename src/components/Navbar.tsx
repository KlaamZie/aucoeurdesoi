import {Navbar} from "@/types";

const Navbar = ({data}: { data: Navbar }) => {
    return (
        <div className={"nav"}>
            <div className={"nav__logo"}>
                <img
                    src={data.logo.url}
                    alt={data.logo.alt}
                />
                <h2>Au cœur de soi</h2>
            </div>
            <div className={"nav__content"}>
                <p>
                    {data.citation}
                </p>
                <div className={"nav__content_legals"}>
                    <a href="/mentions-legales">Mentions légales</a>
                    <span>-</span>
                    <a href="/cgv">CGV</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar