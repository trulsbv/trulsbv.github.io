import type { Meta, StoryObj } from "@storybook/react-vite";
import AIBanner from "../components/AIBanner";

const meta: Meta<typeof AIBanner> = {
  title: "Components/AIBanner",
  component: AIBanner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomBackground: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: "gradient",
      values: [
        {
          name: "gradient",
          value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        },
      ],
    },
  },
};
