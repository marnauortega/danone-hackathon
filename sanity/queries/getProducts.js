import { sanityFetch } from "./index";

export async function getProducts(sortKey, order) {
  const query = `
      query ($sort: [ProductSorting!]){
          allProduct(sort: $sort){
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

  const response = await sanityFetch({ query, variables });
  return response.body?.data?.allProduct ?? [];
}
