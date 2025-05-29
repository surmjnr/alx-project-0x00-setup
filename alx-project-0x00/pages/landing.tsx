import React from 'react'
import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-8">Landing Page</h1>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Button Sizes</h2>
          <div className="flex gap-4">
            <Button title="Small Button" size="small" />
            <Button title="Medium Button" size="medium" />
            <Button title="Large Button" size="large" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">Button Shapes</h2>
          <div className="flex gap-4">
            <Button title="Slightly Rounded" shape="rounded-sm" />
            <Button title="Medium Rounded" shape="rounded-md" />
            <Button title="Fully Rounded" shape="rounded-full" />
          </div>
        </div>

        <Card />
      </div>
    </div>
  )
}

export default Landing 