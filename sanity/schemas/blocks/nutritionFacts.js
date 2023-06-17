export default {
  name: "nutritionFacts",
  title: "Nutrion Facts",
  type: "object",
  fields: [
    {
      name: "weight",
      title: "Weight",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fat",
      title: "Fat",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "carbohidrates",
      title: "Carbohidrates",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "energy",
      title: "Energy",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
  ],
};
