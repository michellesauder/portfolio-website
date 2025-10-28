import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardHeader } from '@/components'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hover: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-sm text-muted-foreground">Card description</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This is the card content. It can contain any React elements or text.
        </p>
      </CardContent>
    </Card>
  ),
}

export const WithHover: Story = {
  render: (args) => (
    <Card {...args} className="w-80" hover>
      <CardHeader>
        <h3 className="text-lg font-semibold">Hover Card</h3>
        <p className="text-sm text-muted-foreground">This card has hover effects</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Hover over this card to see the interactive effects.
        </p>
      </CardContent>
    </Card>
  ),
}

export const ServiceCard: Story = {
  render: (args) => (
    <Card {...args} className="w-80" hover>
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">☁️</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Cloud Architecture</h3>
            <p className="text-sm text-muted-foreground">Scalable infrastructure</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Design and implement scalable cloud infrastructure solutions that grow with your business.
        </p>
      </CardContent>
    </Card>
  ),
}

export const ProjectCard: Story = {
  render: (args) => (
    <Card {...args} className="w-80" hover>
      <CardHeader>
        <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
          <span className="text-muted-foreground">Project Image</span>
        </div>
        <h3 className="text-lg font-semibold">EcoTrack Platform</h3>
        <p className="text-sm text-muted-foreground">
          Sustainability tracking and analytics platform
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
            React
          </span>
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
            Node.js
          </span>
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
            AWS
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          A comprehensive platform for tracking environmental impact and sustainability metrics.
        </p>
      </CardContent>
    </Card>
  ),
}




