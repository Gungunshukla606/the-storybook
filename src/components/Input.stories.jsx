import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  // Isse aap dashboard se toggle kar payengi
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error"],
    },
  },
};

export const Default = {
  args: {
    placeholder: "Enter text...",
    variant: "default",
  },
};

export const ErrorState = {
  args: {
    placeholder: "Enter your email",
    variant: "error", // Isse border red dikhega
  },
};
