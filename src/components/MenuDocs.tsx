import Nullstack from 'nullstack'

import DisplayComponent from '@docs/utils/DisplayComponent'
import Doc from '@docs/utils/Doc'
import { Menu } from 'nulldaisy'

class MenuDocs extends Nullstack {

  render() {
    return (
      <Doc name="Menu">
        <DisplayComponent
          name="Menu"
          code={`<Menu><Menu.Item>Item 1</Menu.Item><Menu.Item>Item 2</Menu.Item><Menu.Item>Item 3</Menu.Item></Menu>`}
        >
          <Menu>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu>
        </DisplayComponent>
        <DisplayComponent
          name="Sizes"
          code={`
          <div class="flex flex-col gap-4">
            <Menu size="xs">
              <Menu.Item>xs item 1</Menu.Item>
              <Menu.Item>xs item 2</Menu.Item>
              <Menu.Item>xs item 3</Menu.Item>
            </Menu>
            <Menu size="sm">
              <Menu.Item>sm item 1</Menu.Item>
              <Menu.Item>sm item 2</Menu.Item>
              <Menu.Item>sm item 3</Menu.Item>
            </Menu>
            <Menu size="md">
              <Menu.Item>md item 1</Menu.Item>
              <Menu.Item>md item 2</Menu.Item>
              <Menu.Item>md item 3</Menu.Item>
            </Menu>
            <Menu size="lg">
              <Menu.Item>lg item 1</Menu.Item>
              <Menu.Item>lg item 2</Menu.Item>
              <Menu.Item>lg item 3</Menu.Item>
            </Menu>
          </div>
          `}
        >
          <div class="flex flex-col gap-4">
            <Menu size="xs">
              <Menu.Item>xs item 1</Menu.Item>
              <Menu.Item>xs item 2</Menu.Item>
              <Menu.Item>xs item 3</Menu.Item>
            </Menu>
            <Menu size="sm">
              <Menu.Item>sm item 1</Menu.Item>
              <Menu.Item>sm item 2</Menu.Item>
              <Menu.Item>sm item 3</Menu.Item>
            </Menu>
            <Menu size="md">
              <Menu.Item>md item 1</Menu.Item>
              <Menu.Item>md item 2</Menu.Item>
              <Menu.Item>md item 3</Menu.Item>
            </Menu>
            <Menu size="lg">
              <Menu.Item>lg item 1</Menu.Item>
              <Menu.Item>lg item 2</Menu.Item>
              <Menu.Item>lg item 3</Menu.Item>
            </Menu>
          </div>
        </DisplayComponent>
        <DisplayComponent
          name="Disabled"
          code={`<Menu><Menu.Item disabled>Item 1</Menu.Item><Menu.Item>Item 2</Menu.Item><Menu.Item>Item 3</Menu.Item></Menu>`}
        >
          <Menu>
            <Menu.Item disabled>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu>
        </DisplayComponent>
        <DisplayComponent
          name="Title"
          code={`<Menu><Menu.Title> Title </Menu.Title><Menu.Item disabled>Item 1</Menu.Item><Menu.Item>Item 2</Menu.Item><Menu.Item>Item 3</Menu.Item></Menu>`}
        >
          <Menu>
            <Menu.Title> Title </Menu.Title>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu>
        </DisplayComponent>
        <DisplayComponent
          name="Submenu"
          code={`<Menu>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Submenu title="Submenu">
              <Menu.Item>Submenu 1</Menu.Item>
              <Menu.Item>Submenu 2</Menu.Item>
              <Menu.Item>Submenu 3</Menu.Item>
            </Menu.Submenu>
          </Menu>`}
        >
          <Menu>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Submenu title="Submenu">
              <Menu.Item>Submenu 1</Menu.Item>
              <Menu.Item>Submenu 2</Menu.Item>
              <Menu.Item>Submenu 3</Menu.Item>
            </Menu.Submenu>
          </Menu>
        </DisplayComponent>
        <DisplayComponent
          name="UnCollapsible"
          code={`<Menu>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Submenu title="Submenu" uncollapsible open>
              <Menu.Item>Submenu 1</Menu.Item>
              <Menu.Item>Submenu 2</Menu.Item>
              <Menu.Item>Submenu 3</Menu.Item>
            </Menu.Submenu>
          </Menu>`}
        >
          <Menu>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Submenu title="Submenu" uncollapsible open>
              <Menu.Item>Submenu 1</Menu.Item>
              <Menu.Item>Submenu 2</Menu.Item>
              <Menu.Item>Submenu 3</Menu.Item>
            </Menu.Submenu>
          </Menu>
        </DisplayComponent>
        <DisplayComponent
          name="Item Active"
          code={`<Menu><Menu.Item active>Item 1</Menu.Item><Menu.Item>Item 2</Menu.Item><Menu.Item>Item 3</Menu.Item></Menu>`}
        >
          <Menu>
            <Menu.Item active>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu>
        </DisplayComponent>
        <DisplayComponent
          name="Horizontal Menu"
          code={`<Menu horizontal><Menu.Item>Item 1</Menu.Item><Menu.Item>Item 2</Menu.Item><Menu.Item>Item 3</Menu.Item></Menu>`}
        >
          <Menu horizontal>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu>
        </DisplayComponent>
        <DisplayComponent
          name="Horizontal Submenu"
          code={`<Menu horizontal><Menu.Submenu title="Submenu"><Menu.Item>Submenu 1</Menu.Item><Menu.Item>Submenu 2</Menu.Item><Menu.Item>Submenu 3</Menu.Item></Menu.Submenu></Menu>`}
        >
          <Menu horizontal>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Submenu title="Submenu">
              <Menu.Item>Submenu 1</Menu.Item>
              <Menu.Item>Submenu 2</Menu.Item>
              <Menu.Item>Submenu 3</Menu.Item>
            </Menu.Submenu>
          </Menu>
        </DisplayComponent>
        <DisplayComponent
          name="Horizontal Submenu Uncollapsible"
          code={`<Menu horizontal><Menu.Submenu title="Submenu" uncollapsible open><Menu.Item>Submenu 1</Menu.Item><Menu.Item>Submenu 2</Menu.Item><Menu.Item>Submenu 3</Menu.Item></Menu.Submenu></Menu>`}
        >
          <Menu horizontal>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Submenu title="Submenu" uncollapsible open>
              <Menu.Item>Submenu 1</Menu.Item>
              <Menu.Item>Submenu 2</Menu.Item>
              <Menu.Item>Submenu 3</Menu.Item>
            </Menu.Submenu>
          </Menu>
        </DisplayComponent>
      </Doc>
    )
  }

}

export default MenuDocs
