import Nullstack from 'nullstack'

import { Badge } from 'daisyui'

import DisplayComponent from '../utils/DisplayComponent'
import Doc from '../utils/Doc'

class BadgeDocs extends Nullstack {

  render() {
    return (
      <Doc name="Badge" description="Badges are used to inform the user of the status of specific data.">
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
