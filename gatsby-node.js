const path = require('path');
// import { getData } from './components/globals/FetchMovies';


module.exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  // const postsPerPage = 2;
  // const numPages = Math.ceil(posts.length / postsPerPage);
  const pageArray = [];

  for (let i = 1; i <= 100; i++) {
    pageArray.push(i);
  }

  console.log(pageArray[597]);

  pageArray.forEach((_, i) => {
    createPage({
      // path: i === 0 ? `/` : `/${i}`,
      path: `/${i}`,
      component: path.resolve('./src/templates/movie-template.js'),
      context: {
        id: i
        // limit: postsPerPage,
        // skip: i * postsPerPage,
        // numPages,
        // currentPage: i + 1
      },
    });
  });

  // return getData.findMovie('titanic')
  //   .then(response => {
  //       response.results.forEach(movie => {
  //         createPage({ path: `/${movie.id}`,
  //                      component: path.resolve('./src/templates/movie-template.js'),
  //                      context: { id: movie.id }
  //         })
  //       })
  //   })
  // const movieInfo = await getData.getMovieDetails(597);
  // console.log(movieInfo.results);
  //
  // return createPage({ path: `/${movieInfo.results.id}`,
  //              component: path.resolve('./src/templates/movie-template.js'),
  //              context: {
  //              }
  // })

  // return graphql(`
  //   {
  //     allBikeQuery: allContentfulBike {
  //       edges {
  //         node {
  //           id
  //           title
  //         }
  //       }
  //     }
  //   }
  // `)

  // movieInfo.results.forEach(movie => {
  //   createPage({ path: `/${movie.id}`,
  //                component: path.resolve('./src/templates/movie-template.js'),
  //                context: {
  //                }
  //   })
  // })
  // .then(result => {
  //   result.data.allBikeQuery.edges.forEach(({ node }) => {
  //     createPage({ path: `bikes/${node.title}`,
  //                  component: path.resolve('./src/templates/movie-template.js'),
  //                  context: {
  //                    id: node.id
  //                  }
  //     })
  //   })
  // })
  // .catch(err => console.log(err))
}
