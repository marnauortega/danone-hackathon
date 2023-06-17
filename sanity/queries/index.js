// import { createClient, groq } from "next-sanity";
// import clientConfig from "@/sanity/clientConfig";

export async function sanityFetch({ query, variables = {} }) {
  const URL = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.${process.env.NEXT_PUBLIC_SANITY_URL}`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  try {
    const result = await fetch(URL, options);
    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error:", error);

    return {
      error,
    };
  }
}
