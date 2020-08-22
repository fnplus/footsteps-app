import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"

const Facebook = ({ url, name, type, title, desc, image, locale, appId }) => (
  <Helmet>
    {name && <meta property="og:site_name" content={name} />}
    <meta property="og:locale" content={locale} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={desc} />
    <meta property="fb:app_id" content={appId} />
  </Helmet>
)

Facebook.propTypes = {
  url: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  appId: PropTypes.string,
}

Facebook.defaultProps = {
  type: `website`,
  name: `fnplusofficial`,
  image: `/images/img_share.png`,
  appId: `218750542018813`,
}

export default Facebook
