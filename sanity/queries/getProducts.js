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
    variables = {
      sort: [
        {
          nutritionFacts: {
            calories: caloriesSort,
          },
        },
      ],
    };
  }

  const emissionsSort = params["emissions"];

  if (emissionsSort) {
    variables = {
      sort: [
        {
          environmentFacts: {
            emissions: emissionsSort,
          },
        },
      ],
    };
  }

  const caloriesFilter = params["caloriesLimit"];
  const dietFilter = params["diet"];

  if (caloriesFilter) {
    variables.where = {
      nutritionFacts: {
        calories: {
          lte: parseInt(caloriesFilter),
        },
      },
    };
  }

  if (dietFilter) {
    variables.where = {
      environmentFacts: {
        diet: {
          [dietFilter]: {
            eq: true,
          },
        },
      },
    };
  }

  if (caloriesFilter && dietFilter) {
    variables.where = {
      nutritionFacts: {
        calories: {
          lte: parseInt(caloriesFilter),
        },
      },
      environmentFacts: {
        diet: {
          [dietFilter]: {
            eq: true,
          },
        },
      },
    };
  }

  const response = await sanityFetch({ query, variables });
  return response.body?.data?.allProduct ?? [];
}
