import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1/Section1";
import Section2 from "@/components/Section2/Section2";
import Section3 from "@/components/Section3/Section3";
import Section4 from "@/components/Section4/Section4";
import Section5 from "@/components/Section5/Section5";
import {performRequest} from "@/lib/datocms";
import Section6 from "@/components/Section6/Section6";


const PAGE_CONTENT_QUERY = `
  query Page {
     _site {
         favicon: faviconMetaTags {
            attributes
            content
            tag
        }
        globalSeo {
            fallbackSeo {
                description
                title
            }
        }
     }
     navbar {
        citation
        logo {
            alt
            url
        }
     }
     section1 {
        titre
        image {
            alt
            url
        }
        sousTitre
     }     
     section2 {
        titre
     }
     allSection2Items {
        titre
        image {
            alt
            url
        }
        texte
     }
     section3 {
        titre
        bouton
        image {
            alt
            url
        }
     }
     allMassages {
        titre
        texte
        prix
        duree
    }
    section4 {
        titre
        image {
            alt
            url
        }
        texte
    }
    section5 {
        titre
        bouton
        facebook
        instagram
    }
    contreIndication {
        texte
    }
  }`;

const App = async () => {
    const {
        navbar,
        section1,
        section2,
        allSection2Items,
        section3,
        allMassages,
        section4,
        section5,
        contreIndication
    } = await performRequest({query: PAGE_CONTENT_QUERY});

    return (
        <>
            <Navbar data={navbar}/>
            <main>
                <Section1 data={{...section1, logo: navbar.logo}}/>
                <Section2 data={{titre: section2.titre, items: allSection2Items}}/>
                <Section3
                    data={{titre: section3.titre, bouton: section3.bouton, image: section3.image, items: allMassages}}/>
                <Section4 data={section4}/>
                <Section5 data={section5}/>
                <Section6 data={contreIndication}/>
                <div className={"btn btn_fixed take_rdv_btn"}>
                    <a
                        className={"btn_content"}
                        href={"https://cal.com/aucoeurdesoi"}
                        target={"_blank"}
                    >
                        {section3.bouton}
                    </a>
                </div>
            </main>
        </>
    )
}

export default App
