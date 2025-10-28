import type { Meta, StoryObj } from '@storybook/react'
import { NavBar } from '@/components'

const meta: Meta<typeof NavBar> = {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithActivePage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/projects',
      },
    },
  },
}




