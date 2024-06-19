import Nullstack from 'nullstack'

import { Alert, Button } from '../../lib'
import DisplayComponent from '../utils/DisplayComponent'
import Doc from '../utils/Doc'

class AlertDocs extends Nullstack {

  secondsToClose = 5

  hydrate() {
    setInterval(() => {
      this.secondsToClose = this.secondsToClose <= 0 ? 0 : this.secondsToClose - 1
    }, 1000)
  }

  handleResetTimeout({ instances }) {
    this.secondsToClose = 5
    instances.timeout.reset()
  }

  render() {
    return (
      <Doc name="Alert" description="Alert informs users about important events.">
        <DisplayComponent name="Default" code={`<Alert >Default</Alert>`}>
          <Alert>Default</Alert>
        </DisplayComponent>
        <DisplayComponent name="Info" code={`<Alert color="info" >Info</Alert>`}>
          <Alert color="info">Info</Alert>
        </DisplayComponent>
        <DisplayComponent name="Success" code={`<Alert color="success" >Success</Alert>`}>
          <Alert color="success">Success</Alert>
        </DisplayComponent>
        <DisplayComponent name="Warning" code={`<Alert color="warning" >Warning</Alert>`}>
          <Alert color="warning">Warning</Alert>
        </DisplayComponent>
        <DisplayComponent name="Error" code={`<Alert color="error" >Error</Alert>`}>
          <Alert color="error">Error</Alert>
        </DisplayComponent>
        <DisplayComponent name="Clean" code={`<Alert clean >Clean</Alert>`}>
          <Alert clean>Clean</Alert>
        </DisplayComponent>
        <DisplayComponent name="Closable" code={`<Alert closable >Closable</Alert>`}>
          <Alert closable>Closable</Alert>
        </DisplayComponent>
        <DisplayComponent
          onShowPreview={() => (this.secondsToClose = 5)}
          name="Timeout"
          code={`<Alert timeout={5000} >Timeout</Alert>`}
        >
          <div class="flex flex-col gap-4 grow">
            <Alert key="timeout" timeout={4999}>
              Timeout closing in {this.secondsToClose} seconds
            </Alert>
            <Button disabled={this.secondsToClose > 0} onclick={this.handleResetTimeout}>
              Reset timeout
            </Button>
          </div>
        </DisplayComponent>
        <DisplayComponent
          name="With Icon"
          code={`<Alert
            icon={
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.193-.538 1.193H5.538c-.538 0-.538-.6-.538-1.193 0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365Zm-8.134 5.368a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M8.54 17.901a3.48 3.48 0 0 0 6.92 0H8.54Z"
                />
              </svg>
            }
          >
            With Icon
          </Alert>`}
        >
          <Alert
            icon={
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.193-.538 1.193H5.538c-.538 0-.538-.6-.538-1.193 0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365Zm-8.134 5.368a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M8.54 17.901a3.48 3.48 0 0 0 6.92 0H8.54Z"
                />
              </svg>
            }
          >
            With Icon
          </Alert>
        </DisplayComponent>
      </Doc>
    )
  }

}

export default AlertDocs
