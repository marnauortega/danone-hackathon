import { sanityFetch } from "./index";

export async function getProducts(params = {}) {
  console.log("this is params", params);

  const query = `
      query ($sort: [ProductSorting!], $where: ProductFilter){
          allProduct(sort: $sort, where: $where){
              title,
              slug {
                  current
              }
              image {
                  asset {
                    url
                    altText
                    metadata {
                        dimensions {
                            width
                            height
                        }
                    }
                  }
              }
              nutritionFacts {
                  weight
                  fat
                  carbohidrates
                  calories
                  ingredients
              }
              environmentFacts {
                  emissions
              }
          }
      }`;

  let variables = {};

  const caloriesSort = params["calories"];

  if (caloriesSort) {
    variables.sort = [
      {
        nutritionFacts: {
          calories: caloriesSort,
        },
      },
    ];
  }

  const emissionsSort = params["emissions"];

  if (emissionsSort) {
    variables.sort = [
      {
        environmentFacts: {
          emissions: emissionsSort,
        },
      },
    ];
  }

  const caloriesFilter = params["caloriesLimit"];

  if (caloriesFilter) {
    if (!variables.where) variables.where = {};
    variables.where.nutritionFacts = {
      calories: {
        lte: parseInt(caloriesFilter),
      },
    };
  }

  const dietFilter = params["diet"];

  if (dietFilter) {
    if (!variables.where) variables.where = {};
    variables.where.environmentFacts = {
      diet: {
        [dietFilter]: {
          eq: true,
        },
      },
    };
  }

  const searchFilter = params["search"];

  if (searchFilter) {
    if (!variables.where) variables.where = {};
    variables.where.title = {
      matches: searchFilter,
    };
  }

  const response = await sanityFetch({ query, variables });
  return response.body?.data?.allProduct ?? [];
}
