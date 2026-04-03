import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  // Ye line add karne se aapke Storybook mein 'Docs' tab active ho jayega
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export const Primary = {
  args: {
    label: "Click me",
    variant: "primary",
    disabled: false,
  },
};

export const Secondary = {
  args: {
    label: "Secondary Action",
    variant: "secondary",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};
