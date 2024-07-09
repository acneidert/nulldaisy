import Nullstack from 'nullstack'

import DisplayComponent from '@docs/utils/DisplayComponent'
import Doc from '@docs/utils/Doc'
import Sandbox, { Props } from '@docs/utils/Sandbox'
import { Badge } from 'nulldaisy'

class BadgeDocs extends Nullstack {

  render() {
    const PROPS: Props = {
      children: { value: 'Badge', description: 'The content of the Badge (can be a string or a component)' },
      color: {
        options: [
          { name: 'Default', value: '' },
          { name: 'Info', value: 'info' },
          { name: 'Success', value: 'success' },
          { name: 'Warning', value: 'warning' },
          { name: 'Error', value: 'error' },
          { name: 'Neutral', value: 'neutral' },
          { name: 'Primary', value: 'primary' },
          { name: 'Secondary', value: 'secondary' },
          { name: 'Accent', value: 'accent' },
          { name: 'Ghost', value: 'ghost' },
        ],
        value: 'info',
        description: 'The color of the Badge',
      },

      size: {
        options: [
          { name: 'Default', value: '' },
          { name: 'Extra Small', value: 'xs' },
          { name: 'Small', value: 'sm' },
          { name: 'Medium', value: 'md' },
          { name: 'Large', value: 'lg' },
        ],
        value: '',
        description: 'The size of the Badge',
      },

      outline: { value: false, description: 'Adds an outline' },
    }
    return (
      <Doc name="Badge" description="Badges are used to inform the user of the status of specific data.">
        <Sandbox element={Badge} props={PROPS} />
        <DisplayComponent name="Base" code={`<Badge>Badge</Badge>`}>
          <Badge>Badge</Badge>
        </DisplayComponent>
        <DisplayComponent
          name="Color"
          code={`
              <div>
              <Badge color="info">Info</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="error">Error</Badge>
              <Badge color="neutral">Neutral</Badge>
              <Badge color="primary">Primary</Badge>
              <Badge color="secondary">Secondary</Badge>
              <Badge color="accent">Accent</Badge>
              <Badge color="ghost">Ghost</Badge>
            </div>`}
        >
          <Badge color="info">Info</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="error">Error</Badge>
          <Badge color="neutral">Neutral</Badge>
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="accent">Accent</Badge>
          <Badge color="ghost">Ghost</Badge>
        </DisplayComponent>
        <DisplayComponent
          name="Outline"
          code={`
              <div>
              <Badge outline color="info">Info</Badge>
              <Badge outline color="success">Success</Badge>
              <Badge outline color="warning">Warning</Badge>
              <Badge outline color="error">Error</Badge>
              <Badge outline color="neutral">Neutral</Badge>
              <Badge outline color="primary">Primary</Badge>
              <Badge outline color="secondary">Secondary</Badge>
              <Badge outline color="accent">Accent</Badge>
              <Badge outline color="ghost">Ghost</Badge>
            </div>`}
        >
          <Badge outline color="info">
            Info
          </Badge>
          <Badge outline color="success">
            Success
          </Badge>
          <Badge outline color="warning">
            Warning
          </Badge>
          <Badge outline color="error">
            Error
          </Badge>
          <Badge outline color="neutral">
            Neutral
          </Badge>
          <Badge outline color="primary">
            Primary
          </Badge>
          <Badge outline color="secondary">
            Secondary
          </Badge>
          <Badge outline color="accent">
            Accent
          </Badge>
          <Badge outline color="ghost">
            Ghost
          </Badge>
        </DisplayComponent>
        <DisplayComponent
          name="Size"
          code={`
              <div>
              <Badge size="xs">Extra Small</Badge>
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium (default)</Badge>
              <Badge size="lg">Large</Badge>
            </div>`}
        >
          <Badge size="xs">Extra Small</Badge>
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium (default)</Badge>
          <Badge size="lg">Large</Badge>
        </DisplayComponent>
      </Doc>
    )
  }

}

export default BadgeDocs
