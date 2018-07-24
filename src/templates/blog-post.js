import React from "react";
import Img from "gatsby-image";

export default ({ data }) => {
  console.log("datos recuperados de graphl", data);
  return (
    <div style={{ margin: "3rem auto", maxWidth: 1024 }}>
      <h1>{data.postData.frontmatter.title}</h1>
      <Img sizes={data.postImage.sizes} />
      <div dangerouslySetInnerHTML={{ __html: data.postData.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    postData: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    postImage: imageSharp(id: { regex: $slug }) {
      sizes(maxWidth: 1024) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
