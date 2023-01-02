import NextHead from "next/head";
import React, { VFC } from "react";

interface Props {
  title?: string;
  viewport?: string;
  description?: string;
  keywords?: string;
  pagePath?: string;
  ogType?: string;
  ogImagePath?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
}

const basePath = process.env.NEXT_PUBLIC_FRONTEND_ENDPOINT;

const Head: VFC<Props> = (props) => {
  const {
    title: _title,
    viewport = "width=device-width,initial-scale=1.0",
    description = "An project for NextJS starter",
    keywords = "nextJs, starter",
    pagePath: _pagePath,
    ogType = "website",
    ogImagePath: _ogImagePath,
    ogImageWidth = "630",
    ogImageHeight = "1200",
  } = props;

  const siteName = "NextJS Starter";

  const title = _title ? `NextJS Starter | ${_title}` : siteName;
  const ogUrl = _pagePath ? `${basePath}${_pagePath}` : basePath;
  const ogImagePath = _ogImagePath
    ? `${basePath}${_ogImagePath}`
    : `${basePath}/og-image.png`;
  const faviconUrl = `${basePath}/favicon.png`;

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="shortcut icon" href={faviconUrl} />
      <meta name={"viewport"} content={viewport} />
      <meta name={"description"} content={description} />
      <meta name={"keywords"} content={keywords} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} /> 
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImagePath} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
    </NextHead>
  );
};

export default Head;
