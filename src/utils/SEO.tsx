
// import types
import type { FC } from "react";
// import modules
import { Helmet } from "react-helmet-async";

// TS types
type Props = {
    title:string,
    desc:string,
    url:string,
    img:string
}

// main component
const SEO : FC<Props> = ({title, desc, url, img}) => {

    const canonical = "https://aboutme.pixlesofte.com";

    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Kamil Kijak",
        "jobTitle": "Software Developer",
        "url": url,
        "image": img,
        "sameAs": [
            "https://github.com/kkamildev",
            "https://linkedin.com/in/kamil-kijak-546676358",
            "https://www.instagram.com/kkamildev"
        ]
    }

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": canonical,
        "name": "Kkamildev portfolio website",
        "description": "Portfolio site where you can find my knowledge, learning and work history, my projects, experience, and organizations",
        "publisher": {
            "@type": "Person",
            "name": "Kamil Kijak (Kkamildev)"
        }
    }

    return(
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={desc} />
            <link rel="canonical" href={canonical} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={img} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content="Hi, my name is Kamil Kijak. I am a student of computer science. So let me introduce myself" />
            <meta name="twitter:image" content={img} />
            <script type="application/ld+json">
                {JSON.stringify(schema)}
                {JSON.stringify(websiteSchema)}
            </script>
        </Helmet>
    )
}

// export components
export default SEO;