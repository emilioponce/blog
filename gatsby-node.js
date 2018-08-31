const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    // genero nombre de imagen principal de cada post a partir de su slug
    const mainImage = slug.replace(/\//g, '') + '.jpg'
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
    createNodeField({
      node,
      name: `mainImage`,
      value: mainImage
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                mainImage
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Los datos pasados al contexto estaran disponibles en las queries de GraphQL
            slug: node.fields.slug,
            mainImage: node.fields.mainImage
          }
        })
      })
      resolve()
    })
  })
}
