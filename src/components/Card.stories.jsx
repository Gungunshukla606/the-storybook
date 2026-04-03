import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  // 1. Documentation tab active karne ke liye
  tags: ["autodocs"],

  // 2. Dashboard se control karne ke liye parameters
  argTypes: {
    shadow: {
      control: "select",
      options: ["sm", "md", "lg", "xl"], // Shadow ki depth change kar sakein
      description: "Card ki shadow intensity set karein",
    },
    imageUrl: {
      control: "text",
      description: "Card image ka URL yahan dalein",
    },
  },
};

// 3. Default variant (Simple Card)
export const Default = {
  args: {
    title: "Card Title",
    description: "This is a simple card without an image.",
    shadow: "md",
  },
};

// 4. Image wala variant (Attractive Look)
export const WithImage = {
  args: {
    title: "Beautiful Landscape",
    description: "This is a premium card with a stunning placeholder image.",
    imageUrl: "https://picsum.photos/400/200",
    shadow: "lg",
  },
};
