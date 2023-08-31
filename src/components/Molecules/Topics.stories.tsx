import type { Meta, StoryObj } from '@storybook/react';
import TopicsNews from './Topics';

const meta = {
    title: 'Components/Atoms/TopicsNews',
    component: TopicsNews,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof TopicsNews>

export default meta
type Story = StoryObj<typeof meta>

export const AI: Story = {
    args: {
        keyword: "AI"
    }
}

export const bitcoin: Story = {
    args: {
        keyword: "仮想通貨"
    }
}

export const economy: Story = {
    args: {
        keyword: "経済"
    }
}
