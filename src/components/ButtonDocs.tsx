import Nullstack from 'nullstack'

import { Button } from 'nulldaisy'

import DisplayComponent from '../utils/DisplayComponent'
import Doc from '../utils/Doc'

class ButtonDocs extends Nullstack {

  render() {
    return (
      <Doc name="Button" description="Buttons allow the user to take actions or make choices.">
        <DisplayComponent name="Base" code="<Button>Button</Button>">
          <Button>Button</Button>
        </DisplayComponent>

        <DisplayComponent name="Outline" code="<Button outline>Outline</Button>">
          <Button outline>Outline</Button>
        </DisplayComponent>

        <DisplayComponent name="Active" code="<Button active>Active</Button>">
          <Button active>Active</Button>
        </DisplayComponent>

        <DisplayComponent name="Disabled" code="<Button disabled>Disabled</Button>">
          <Button disabled>Disabled</Button>
        </DisplayComponent>

        <DisplayComponent name="Glass" code="<Button glass>Button</Button>">
          <Button glass>Button</Button>
        </DisplayComponent>

        <DisplayComponent name="No Animation" code="<Button noAnimation>Button</Button>">
          <Button noAnimation>Button</Button>
        </DisplayComponent>

        <DisplayComponent
          name="Color"
          code={`<div><Button color="primary">Primary</Button>
                  <Button color="secondary">Secondary</Button>
                  <Button color="accent">Accent</Button>
                  <Button color="info">Info</Button>
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="error">Error</Button></div>`}
        >
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="accent">Accent</Button>
          <Button color="info">Info</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Error</Button>
        </DisplayComponent>
        <DisplayComponent
          name="Outline + Color"
          code={`<div><Button outline color="primary">Primary</Button>
            <Button outline color="secondary">Secondary</Button>
            <Button outline color="accent">Accent</Button>
            <Button outline color="info">Info</Button>
            <Button outline color="success">Success</Button>
            <Button outline color="warning">Warning</Button>
            <Button outline color="error">Error</Button></div>`}
        >
          <Button outline color="primary">
            Primary
          </Button>
          <Button outline color="secondary">
            Secondary
          </Button>
          <Button outline color="accent">
            Accent
          </Button>
          <Button outline color="info">
            Info
          </Button>
          <Button outline color="success">
            Success
          </Button>
          <Button outline color="warning">
            Warning
          </Button>
          <Button outline color="error">
            Error
          </Button>
        </DisplayComponent>

        <DisplayComponent
          name="Size"
          code={`<div><Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Normal</Button>
            <Button size="lg">Large</Button></div>`}
        >
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Normal</Button>
          <Button size="lg">Large</Button>
        </DisplayComponent>

        <DisplayComponent name="Square" code={`<Button square> X </Button>`}>
          <Button square>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </DisplayComponent>
        <DisplayComponent name="Circle" code={`<Button circle> X </Button>`}>
          <Button circle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </DisplayComponent>
      </Doc>
    )
  }

}

export default ButtonDocs
