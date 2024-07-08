import Nullstack from 'nullstack'

import DisplayComponent from '@docs/utils/DisplayComponent'
import Doc from '@docs/utils/Doc'
import { Avatar } from 'nulldaisy'

class AvatarDocs extends Nullstack {

  render() {
    return (
      <Doc
        name="Avatar"
        description="Avatars are used to show a thumbnail representation of an individual or business in the interface."
      >
        <DisplayComponent
          name="Default"
          code={`<Avatar>
            <div class="w-24 rounded">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </Avatar>`}
        >
          <Avatar>
            <div class="w-24 rounded">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </Avatar>
        </DisplayComponent>
        <DisplayComponent
          name="Group"
          code={`<Avatar.Group>
            <Avatar>
              <div class="w-24 rounded">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </Avatar>
            <Avatar>
              <div class="w-24 rounded">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </Avatar>
          </Avatar.Group>`}
        >
          <Avatar.Group>
            <Avatar>
              <div class="w-24 rounded">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </Avatar>
            <Avatar>
              <div class="w-24 rounded">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </Avatar>
          </Avatar.Group>
        </DisplayComponent>
        <DisplayComponent
          name="Placeholder"
          code={`<Avatar placeholder>
           <div class="bg-neutral text-neutral-content rounded-full w-24">
              <span class="text-3xl">UI</span>
            </div>
          </Avatar>`}
        >
          <Avatar placeholder>
            <div class="bg-neutral text-neutral-content rounded-full w-24">
              <span class="text-3xl">UI</span>
            </div>
          </Avatar>
        </DisplayComponent>
        <DisplayComponent
          name="Status"
          code={`
            <div>
            <Avatar online>
            <div class="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </Avatar>
          <Avatar offline>
            <div class="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </Avatar>
          </div>`}
        >
          <Avatar online>
            <div class="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </Avatar>
          <Avatar offline>
            <div class="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </Avatar>
        </DisplayComponent>
      </Doc>
    )
  }

}

export default AvatarDocs
