import { sanityFetch } from "./index";

export async function getProduct(inputSlug) {
  const query = `
      query ($where: ProductFilter){
          allProduct( where: $where){
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

  const variables = {
    where: {
      slug: {
        current: {
          eq: inputSlug,
        },
      },
    },
  };

  const response = await sanityFetch({ query, variables });
  return response.body?.data?.allProduct ?? [];
}
