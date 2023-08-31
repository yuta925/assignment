import type { Meta, StoryObj } from '@storybook/react';
import FetchNews from './News';

const meta = {
    title: 'Components/Atoms/News',
    component: FetchNews,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof FetchNews>

export default meta
type Story = StoryObj<typeof meta>

export const Top: Story = {
    args: {
        category: "general"
    }
}

export const Business: Story = {
    args: {
        category: "business"
    }
}

export const Technology: Story = {
    args: {
        category: "technology"
    }
}

export const Entertainment: Story = {
    args: {
        category: "entertainment"
    }
}

export const Sports: Story = {
    args: {
        category: "sports"
    }
}