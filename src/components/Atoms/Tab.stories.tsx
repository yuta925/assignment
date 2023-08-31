import type { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab';

const meta = {
    title: 'Components/Atoms/Tab',
    component: Tab,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

export const TopStories: Story = {
    args: {
        tabName: "Top Stories",
        tabID: "/"
    }
}

export const Business: Story = {
    args: {
        tabName: "Business",
        tabID: "business"
    }
}

export const Technology: Story = {
    args: {
        tabName: "Technology",
        tabID: "technology"
    }
}

export const Entertainment: Story = {
    args: {
        tabName: "Entertainment",
        tabID: "entertainment"
    }
}

export const Sports: Story = {
    args: {
        tabName: "Sports",
        tabID: "sports"
    }
}