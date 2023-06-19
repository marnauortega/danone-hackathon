export default {
  name: "environmentFacts",
  title: "Environment Facts",
  type: "object",
  fields: [
    {
      name: "emissions",
      title: "Emissions",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "nutriscore",
      title: "Nutriscore",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "diet",
      title: "Diet",
      type: "diet",
      validation: (Rule) => Rule.required(),
    },
  ],
};
