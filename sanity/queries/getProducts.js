import { sanityFetch } from "./index";

export async function getProducts(sortKey, order, caloriesLimit) {
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

  let variables;

  if (sortKey === "calories") {
    variables = {
      sort: [
        {
          nutritionFacts: {
            calories: order,
          },
        },
      ],
    };
  }

  if (sortKey === "emissions") {
    variables = {
      sort: [
        {
          environmentFacts: {
            emissions: order,
          },
        },
      ],
    };
  }

  if (caloriesLimit)
    variables.where = {
      nutritionFacts: {
        calories: {
          lte: caloriesLimit,
        },
      },
    };

  const response = await sanityFetch({ query, variables });
  return response.body?.data?.allProduct ?? [];
}
