import type { Meta, StoryObj } from '@storybook/react';
import TokyoWeather from './Weather';

const meta = {
    title: 'Components/Atoms/Weather',
    component: TokyoWeather,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof TokyoWeather>

export default meta
type Story = StoryObj<typeof meta>

export const weather: Story = {

}
