export interface Navbar {
    citation: string;
    logo: Image;
}

export interface Section1 {
    titre: string;
    image: Image;
    sousTitre: string;
    logo: Image;
}

export interface Section2 {
    titre: string;
    items: Section2Item[];
}

export interface Section3 {
    titre: string;
    bouton: string;
    image: Image;
    items: Massage[];
}

export interface Section4 {
    titre: string;
    image: Image;
    texte: string;
}

export interface Section5 {
    titre: string;
    bouton: string;
    facebook: string;
    instagram: string;
}

interface Image {
    url: string;
    alt: string;
}

interface Section2Item {
    titre: string;
    image: Image;
    texte: string;
}

export interface Massage {
    titre: string;
    texte: string;
    duree: string;
    prix: string;
}