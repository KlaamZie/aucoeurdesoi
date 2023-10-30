import '@/styles/main.scss'
import {performRequest} from "@/lib/datocms";
import {Metadata, ResolvingMetadata} from "next";
import {toNextMetadata} from "react-datocms";

const PAGE_CONTENT_QUERY = `
  query Page {
       site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
      page {
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
      }
  }`;

export async function generateMetadata(
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params

    // fetch data
    const response = await performRequest({query: PAGE_CONTENT_QUERY});

    return toNextMetadata([...response.site.favicon, ...response.page.seo])
}

export default async function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body>{children}</body>
        </html>
    )
}
