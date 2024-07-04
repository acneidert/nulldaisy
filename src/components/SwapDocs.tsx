import Nullstack from 'nullstack'

import { Swap } from 'daisyui'

import DisplayComponent from '../utils/DisplayComponent'
import Doc from '../utils/Doc'

class SwapDocs extends Nullstack {

  activeState = true
  render() {
    return (
      <Doc
        name="Swap"
        description="Swap allows you to toggle the visibility of two elements using a checkbox or a class name."
      >
        <DisplayComponent
          name="Base"
          code={` <Swap>
              <Swap.On>ON</Swap.On>
              <Swap.Off>OFF</Swap.Off>
            </Swap>`}
        >
          <Swap>
            <Swap.On>ON</Swap.On>
            <Swap.Off>OFF</Swap.Off>
          </Swap>
        </DisplayComponent>
        <DisplayComponent
          name="Rotate"
          code={`<Swap rotate>
              <Swap.On>ON</Swap.On>
              <Swap.Off>OFF</Swap.Off>
            </Swap>
          `}
        >
          <Swap rotate>
            <Swap.On>ON</Swap.On>
            <Swap.Off>OFF</Swap.Off>
          </Swap>
        </DisplayComponent>
        <DisplayComponent
          name="Flip"
          code={` <Swap flip>
              <Swap.On>ON</Swap.On>
              <Swap.Off>OFF</Swap.Off>
            </Swap>`}
        >
          <Swap flip>
            <Swap.On>ON</Swap.On>
            <Swap.Off>OFF</Swap.Off>
          </Swap>
        </DisplayComponent>
        <DisplayComponent
          name="Active"
          states={`active: boolean = true
              
              toogle() {
                this.active = !this.active
              }
              `}
          code={`<Swap active={this.active} onclick={this.toogle}>
              <Swap.On>ON</Swap.On>
              <Swap.Off>OFF</Swap.Off>
            </Swap>`}
        >
          <Swap active={this.activeState} onclick={() => (this.activeState = !this.activeState)}>
            <Swap.On>ON</Swap.On>
            <Swap.Off>OFF</Swap.Off>
          </Swap>
        </DisplayComponent>
      </Doc>
    )
  }

}

export default SwapDocs
