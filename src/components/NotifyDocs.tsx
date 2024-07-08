import Nullstack from 'nullstack'

import { Button, Notify } from 'nulldaisy'

import Code from '../utils/Code'
import DisplayComponent from '../utils/DisplayComponent'
import Doc from '../utils/Doc'

class NotifyDocs extends Nullstack {

  handleAddNotify({data}) {
    const { message, position, duration = 3000, type, closable = true } = data

    if (type) {
      type === 'info' && Notify.info({ message, position, duration })
      type === 'success' && Notify.success({ message, position, duration })
      type === 'warning' && Notify.warning({ message, position, duration })
      type === 'error' && Notify.error({ message, position, duration })
      return
    }
    Notify.notify({
      message,
      position,
      duration,
      closable,
    })
  }

  render() {
    return (
      <Doc name="Notify" description="Notify is used to display notifications.">
        <div class="flex flex-col gap-2 py-4">
          To use Notify, you need add it in your Application component:
          <div class="rounded-lg bg-zinc-800 p-4">
            <Code
              onlyCode
              name="Application"
              description="Application component"
              code={`
              import Nullstack from 'nullstack';
              import { Notify } from 'nulldaisy';
              class Application extends Nullstack {
              render(){
                return (
                  <body>
                  ...
                    <Notify />
                  </body>
                )
              }
            }`}
            />
          </div>
        </div>
        <DisplayComponent
          name="Default"
          states="handleAddTopRight() {
                    Notify.notify({
                      message: 'Top Right',
                      position: 'top-right',
                      duration: 3000,
                    })
                  }"
          code={`<Button onclick={this.handleAddTopRight}>Default</Button>`}
        >
          <Button onclick={this.handleAddNotify} data={{ message: 'Top Right', position: 'top-right' }}>
            Default
          </Button>
        </DisplayComponent>
        <DisplayComponent
          name="Top Center"
          states="handleAddTopCenter() {
                    Notify.notify({
                      message: 'Top Center',
                      position: 'top-center',
                      duration: 3000,
                    })
                  }"
          code={`<Button onclick={this.handleAddTopCenter}>Top Center</Button>`}
        >
          <Button onclick={this.handleAddNotify} data-message="Top Center" data-position="top-center">
            Top Center
          </Button>
        </DisplayComponent>
        <DisplayComponent
          name="Top Left"
          states="handleAddTopLeft() {
                    Notify.notify({
                      message: 'Top Left',
                      position: 'top-left',
                      duration: 3000,
                    })
                  }"
          code={`<Button onclick={this.handleAddTopLeft}>Top Left</Button>`}
        >
          <Button onclick={this.handleAddNotify} data-message="Top Left" data-position="top-left">
            Top Left
          </Button>
        </DisplayComponent>
        <DisplayComponent
          name="Bottom Center"
          states="handleAddBottomCenter() {
                    Notify.notify({
                      message: 'Bottom Center',
                      position: 'bottom-center',
                      duration: 3000,
                    })
                  }"
          code={`<Button onclick={this.handleAddBottomCenter}>Bottom Center</Button>`}
        >
          <Button onclick={this.handleAddNotify} data-message="Bottom Center" data-position="bottom-center">
            Bottom Center
          </Button>
        </DisplayComponent>
        <DisplayComponent
          name="Bottom Right"
          states="handleAddBottomRight() {
                    Notify.notify({
                      message: 'Bottom Right',
                      position: 'bottom-right',
                      duration: 3000,
                    })
                  }"
          code={`<Button onclick={this.handleAddBottomRight}>Bottom Right</Button>`}
        >
          <Button onclick={this.handleAddNotify} data-message="Bottom Right" data-position="bottom-right">
            Bottom Right
          </Button>
        </DisplayComponent>
        <DisplayComponent
          name="Bottom Left"
          states="handleAddBottomLeft() {
                    Notify.notify({
                      message: 'Bottom Left',
                      position: 'bottom-left',
                      duration: 3000,
                    })
                  }"
          code={`<Button onclick={this.handleAddBottomLeft}>Bottom Left</Button>`}
        >
          <Button onclick={this.handleAddNotify} data-message="Bottom Left" data-position="bottom-left">
            Bottom Left
          </Button>
        </DisplayComponent>
        <DisplayComponent
          name="Types"
          states="handleInfo() {
                    Notify.info({ message: 'Info' })
                  }
                  handleSuccess() {
                    Notify.success({ message: 'Success' })
                  }
                  handleWarning() {
                    Notify.warning({ message: 'Warning' })
                  }  
                  handleError() {
                    Notify.error({ message: 'Error' })
                  }
                  "
          code={`<div class="flex gap-2">
            <Button color="info" onclick={this.handleInfo}>
            Info
          </Button>
          <Button color="success" onclick={this.handleSuccess} >
            Success
          </Button>
          <Button color="warning" onclick={this.handleWarning} >
            Warning
          </Button>
          <Button color="error" onclick={this.handleError} >
            Error
          </Button>
        </div>`}
        >
          <Button color="info" onclick={this.handleAddNotify} data-message="Info!" data-type="info">
            Info
          </Button>
          <Button color="success" onclick={this.handleAddNotify} data-message="Success!" data-type="success">
            Success
          </Button>
          <Button color="warning" onclick={this.handleAddNotify} data-message="Warning!" data-type="warning">
            Warning
          </Button>
          <Button color="error" onclick={this.handleAddNotify} data-message="Error!" data-type="error">
            Error
          </Button>
        </DisplayComponent>
        <DisplayComponent
          name="Duration"
          states="handleDuration() {
                    Notify.notify({
                      message: 'Duration',
                      duration: 2000,
                    })
                  }"
          code={`<Button onclick={this.handleDuration}>Default</Button>`}
        >
          <Button onclick={this.handleAddNotify} data-message="Duration 500ms" data-duration="500">
            Duration 500ms
          </Button>
          <Button onclick={this.handleAddNotify} data-message="Duration 1000ms" data-duration="1000">
            Duration 1000ms
          </Button>
          <Button onclick={this.handleAddNotify} data-message="Duration 2000ms" data-duration="2000">
            Duration 2000ms
          </Button>
        </DisplayComponent>
        <DisplayComponent
          name="Unclosable"
          states="handleUnclosable() {
                    Notify.notify({
                      message: 'Unclosable',
                      closable: false,
                    })
                  }"
          code={`<Button onclick={this.handleUnclosable}>Unclosable</Button>`}
        >
          <Button onclick={this.handleAddNotify} data-message="Unclosable" data-closable={false}>
            Unclosable
          </Button>
        </DisplayComponent>
      </Doc>
    )
  }

}

export default NotifyDocs
