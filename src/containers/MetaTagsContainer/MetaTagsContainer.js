import React from "react";
import { Helmet } from "react-helmet";
import metaData from "../../assets/metaData/metaData";

const MetaTagsContainer = ({ title, description, imgURL }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={metaData.mainLocation + imgURL} />
      <meta
        property="og:url"
        content={metaData.mainLocation + window.location.pathname}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default MetaTagsContainer;
