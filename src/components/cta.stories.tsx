import type { Meta, StoryObj } from '@storybook/react'
import { CTA } from '@/components'

const meta: Meta<typeof CTA> = {
  title: 'Components/CTA',
  component: CTA,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'ghost', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    showArrow: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Get Started',
    href: '/contact',
  },
}

export const Outline: Story = {
  args: {
    children: 'Learn More',
    href: '/about',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'View Projects',
    href: '/projects',
    variant: 'ghost',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Contact Me',
    href: '/contact',
    variant: 'secondary',
  },
}

export const WithArrow: Story = {
  args: {
    children: 'Get Started',
    href: '/contact',
    showArrow: true,
  },
}

export const Large: Story = {
  args: {
    children: 'Book a Call',
    href: '/contact',
    size: 'lg',
    showArrow: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Coming Soon',
    href: '/contact',
    disabled: true,
  },
}

export const AsButton: Story = {
  args: {
    children: 'Submit Form',
    type: 'submit',
  },
}




