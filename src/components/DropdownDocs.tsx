import Nullstack from 'nullstack'

import { Button, Dropdown } from '../../lib'
import DisplayComponent from '../utils/DisplayComponent'
import Doc from '../utils/Doc'

class DropdownDocs extends Nullstack {

  render() {
    return (
      <Doc name="Dropdown" description="Dropdown can open a menu or any other element when the button is clicked.">
        <DisplayComponent
          name="Base"
          code={`
              <Dropdown>
                <Dropdown.Trigger>
                  <Button>Trigger</Button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <div class="p-4 bg-zinc-900">Content</div>
                </Dropdown.Content>
              </Dropdown>`}
        >
          <Dropdown>
            <Dropdown.Trigger>
              <Button>Trigger</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <div class="p-4 bg-zinc-900">Content</div>
            </Dropdown.Content>
          </Dropdown>
        </DisplayComponent>
        <DisplayComponent
          name="Side Left"
          code={`
              <Dropdown side="left">
                <Dropdown.Trigger>
                  <Button>Trigger</Button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <div class="p-4 bg-zinc-900">Content</div>
                </Dropdown.Content>
              </Dropdown>`}
        >
          <Dropdown side="left">
            <Dropdown.Trigger>
              <Button>Trigger</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <div class="p-4 bg-zinc-900">Content</div>
            </Dropdown.Content>
          </Dropdown>
        </DisplayComponent>

        <DisplayComponent
          name="Side Right"
          code={`
              <Dropdown side="right">
                <Dropdown.Trigger>
                  <Button>Trigger</Button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <div class="p-4 bg-zinc-900">Content</div>
                </Dropdown.Content>
              </Dropdown>`}
        >
          <Dropdown side="right">
            <Dropdown.Trigger>
              <Button>Trigger</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <div class="p-4 bg-zinc-900">Content</div>
            </Dropdown.Content>
          </Dropdown>
        </DisplayComponent>
        <DisplayComponent
          name="Align Top"
          code={`
              <Dropdown align="top">
                <Dropdown.Trigger>
                  <Button>Trigger</Button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <div class="p-4 bg-zinc-900">Content</div>
                </Dropdown.Content>
              </Dropdown>`}
        >
          <Dropdown align="top">
            <Dropdown.Trigger>
              <Button>Trigger</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <div class="p-4 bg-zinc-900">Content</div>
            </Dropdown.Content>
          </Dropdown>
        </DisplayComponent>
        <DisplayComponent
          name="Align Bottom"
          code={`
              <Dropdown align="bottom">
                <Dropdown.Trigger>
                  <Button>Trigger</Button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <div class="p-4 bg-zinc-900">Content</div>
                </Dropdown.Content>
              </Dropdown>`}
        >
          <Dropdown align="bottom">
            <Dropdown.Trigger>
              <Button>Trigger</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <div class="p-4 bg-zinc-900">Content</div>
            </Dropdown.Content>
          </Dropdown>
        </DisplayComponent>
        <DisplayComponent
          name="Hover"
          code={`
              <Dropdown hover>
                <Dropdown.Trigger>
                  <Button>Trigger</Button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <div class="p-4 bg-zinc-900">Content</div>
                </Dropdown.Content>
              </Dropdown>`}
        >
          <Dropdown hover>
            <Dropdown.Trigger>
              <Button>Trigger</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <div class="p-4 bg-zinc-900">Content</div>
            </Dropdown.Content>
          </Dropdown>
        </DisplayComponent>
      </Doc>
    )
  }

}

export default DropdownDocs
