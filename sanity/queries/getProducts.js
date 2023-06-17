import { sanityFetch } from "./index";

export async function getProducts() {
  const query = `
      query {
          allProduct{
              title,
              slug {
                  current
              }
              image {
                  asset {
                  url
                  altText
                  }
              }
              nutritionFacts {
                  weight
                  fat
                  carbohidrates
                  energy
                  ingredients
              }
              environmentFacts {
                  emissions
              }
          }
      }`;

  const response = await sanityFetch({ query });
  return response.body?.data?.allProduct ?? [];
}
