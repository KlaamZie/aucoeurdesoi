import React from 'react';
import {performRequest} from "@/lib/datocms";
import parse from 'html-react-parser';


const PAGE_CONTENT_QUERY = `
  query Page {
      mentionsLegale {
        contenu
      }
  }`;

const MentionsLegales = async () => {
    const {mentionsLegale} = await performRequest({query: PAGE_CONTENT_QUERY});

    return (
        <>
            <main>
                <div className={'legals'}>
                    <h1>Mentions légales</h1>
                    {parse(mentionsLegale.contenu)}
                </div>
            </main>
        </>
    );
}

export default MentionsLegales;