export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Imatge",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "units",
      title: "Units",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "nutritionFacts",
      title: "Nutrition Facts",
      type: "nutritionFacts",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "environmentFacts",
      title: "Environment Facts",
      type: "environmentFacts",
      validation: (Rule) => Rule.required(),
    },
  ],
};
