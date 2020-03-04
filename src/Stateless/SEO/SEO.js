import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import {
  StaticQuery,
  graphql,
} from "../../Stateless/Layout/node_modules/gatsby"
import Facebook from "./Facebook"
import Twitter from "./Twitter"

const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
          siteLanguage,
          ogLanguage,
          author,
          twitter,
          facebook,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
        siteLanguage: siteLanguage,
        author: author,
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
          <Facebook
            desc={seo.description}
            image={seo.image}
            title={seo.title}
            type={article ? "article" : "website"}
            url={seo.image}
            locale={ogLanguage}
            name={facebook}
          />
          <Twitter
            title={seo.title}
            image={seo.image}
            desc={seo.description}
            username={twitter}
          />
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
}

SEO.defaultProps = {
  title: `Footsteps`,
  ogLanguage: `en_US`,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        siteLanguage
        ogLanguage
        author
        twitter
        facebook
      }
    }
  }
`
