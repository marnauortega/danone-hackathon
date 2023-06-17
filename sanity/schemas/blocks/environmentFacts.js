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
  ],
};
