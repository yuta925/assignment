import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta = {
    title: 'Components/Atoms/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const tabs: Story = {

}