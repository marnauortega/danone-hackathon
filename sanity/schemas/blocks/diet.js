export default {
  name: "diet",
  title: "Diet",
  type: "object",
  fields: [
    {
      name: "avidMeatEater",
      title: "Avid Meat Eater",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "omnivore",
      title: "Omnivore",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "vegan",
      title: "Vegan",
      type: "boolean",
      initialValue: false,
    },
  ],
};
