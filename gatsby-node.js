const path = require(`path`);

 // Somente os arquivos `content.md` do diretório `src/data/posts` devem ser  
const isCorrectPostFile = (fileNode) => (
    fileNode.sourceInstanceName === `posts` &&
    fileNode.name === `content` &&
    fileNode.relativeDirectory !== ``
);

const isCorrectPostImage = (fileNode) => (
  fileNode.sourceInstanceName === `posts` &&
  fileNode.name === `cover` &&
  fileNode.relativeDirectory !== ``
);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const fileNode = getNode(node.parent);
  
  if (node.internal.type === `MarkdownRemark`) {
    if (!isCorrectPostFile(fileNode)) return;

    const slug = `/${fileNode.relativeDirectory}`;

    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }

  if (node.internal.type === `ImageSharp`) {
    if (!isCorrectPostImage(fileNode)) return;
    const slug = `/${fileNode.relativeDirectory}`;

    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const filteredNodes = result.data.allMarkdownRemark.edges.filter(({ node }) => !!node.fields);

  filteredNodes.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/BlogPost/index.js`),
      context: {
        slug: node.fields.slug
      }
    });
  })
}