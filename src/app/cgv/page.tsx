import React from 'react';
import {performRequest} from "@/lib/datocms";
import parse from 'html-react-parser';


const PAGE_CONTENT_QUERY = `
  query Page {
      cgv {
        contenu
      }
  }`;

const CGV = async () => {
    const {cgv} = await performRequest({query: PAGE_CONTENT_QUERY});

    return (
        <>
            <main>
                <div className={'legals'}>
                    <h1>CGV</h1>
                    {parse(cgv.contenu)}
                </div>
            </main>
        </>
    );
}

export default CGV;