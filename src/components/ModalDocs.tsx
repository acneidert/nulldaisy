import Nullstack, { NullstackClientContext } from 'nullstack'

import { Button, Modal } from 'nulldaisy'

import DisplayComponent from '../utils/DisplayComponent'
import Doc from '../utils/Doc'

class ModalDocs extends Nullstack {

  handleShowModal({data, instances}:NullstackClientContext) {
    const modal = instances[data.modal] as Modal
    modal.show()
  }

  handleHideModal({ data, instances }: NullstackClientContext) {
    const modal = instances[data.modal] as Modal
    modal.hide()
  }

  render() {
    return (
      <Doc name="Modal" description="Modal is used to show a dialog or a box when you click a button.">
        <DisplayComponent
          name="Base"
          states={`
                handleShowModal({instances}: NullstackClientContext) {
                  const modal: Modal = instances['modal'];
                  modal.show();
                }

                handleHideModal({instances}: NullstackClientContext) {
                  const modal: Modal = instances['modal'];
                  modal.hide();
                }
            `}
          code={`<div>
            <Button onclick={this.handleShowModal}>
              Open Modal
            </Button>
            <Modal key="modal">
              <Modal.Content>
                <p>Modal Content</p>
                <Modal.Action>
                  <Button onclick={this.handleHideModal}>
                    Close
                  </Button>
                </Modal.Action>
              </Modal.Content>
            </Modal>
            </div>`}
        >
          <Button onclick={this.handleShowModal} data-modal="modal">
            Open Modal
          </Button>
          <Modal key="modal">
            <Modal.Content>
              <p>Modal Content</p>
              <Modal.Action>
                <Button onclick={this.handleHideModal} data-modal="modal">
                  Close
                </Button>
              </Modal.Action>
            </Modal.Content>
          </Modal>
        </DisplayComponent>
        <DisplayComponent
          name="Backdrop Static"
          states={`
                handleShowModal({instances}: NullstackClientContext) {
                  const modal: Modal = instances['modal'];
                  modal.show();
                }

                handleHideModal({instances}: NullstackClientContext) {
                  const modal: Modal = instances['modal'];
                  modal.hide();
                }
            `}
          code={`<div>
            <Button onclick={this.handleShowModal}>
              Open Modal
            </Button>
            <Modal key="modal" static>
              <Modal.Content>
                <p>Modal Content</p>
                <Modal.Action>
                  <Button onclick={this.handleHideModal}>
                    Close
                  </Button>
                </Modal.Action>
              </Modal.Content>
            </Modal>
            </div>`}
        >
          <Button onclick={this.handleShowModal} data-modal="modal-backdrop">
            Open Modal
          </Button>
          <Modal key="modal-backdrop" static>
            <Modal.Content>
              <p>Modal Content</p>
              <Modal.Action>
                <Button onclick={this.handleHideModal} data-modal="modal-backdrop">
                  Close
                </Button>
              </Modal.Action>
            </Modal.Content>
          </Modal>
        </DisplayComponent>
        <DisplayComponent
          name="Position Top"
          states={`
                handleShowModal({instances}: NullstackClientContext) {
                  const modal: Modal = instances['modal'];
                  modal.show();
                }

                handleHideModal({instances}: NullstackClientContext) {
                  const modal: Modal = instances['modal'];
                  modal.hide();
                }
            `}
          code={`<div>
            <Button onclick={this.handleShowModal}>
              Open Modal
            </Button>
            <Modal key="modal" position="top">
              <Modal.Content>
                <p>Modal Content</p>
                <Modal.Action>
                  <Button onclick={this.handleHideModal}>
                    Close
                  </Button>
                </Modal.Action>
              </Modal.Content>
            </Modal>
            </div>`}
        >
          <Button onclick={this.handleShowModal} data-modal="modal-top">
            Open Modal
          </Button>
          <Modal key="modal-top" position="top">
            <Modal.Content>
              <p>Modal Content</p>
              <Modal.Action>
                <Button onclick={this.handleHideModal} data-modal="modal-top">
                  Close
                </Button>
              </Modal.Action>
            </Modal.Content>
          </Modal>
        </DisplayComponent>
        <DisplayComponent
          name="Position Bottom"
          states={`
                handleShowModal({instances}: NullstackClientContext) {
                  const modal: Modal = instances['modal'];
                  modal.show();
                }

                handleHideModal({instances}: NullstackClientContext) {
                  const modal: Modal = instances['modal'];
                  modal.hide();
                }
            `}
          code={`<div>
            <Button onclick={this.handleShowModal}>
              Open Modal
            </Button>
            <Modal key="modal" position="bottom">
              <Modal.Content>
                <p>Modal Content</p>
                <Modal.Action>
                  <Button onclick={this.handleHideModal}>
                    Close
                  </Button>
                </Modal.Action>
              </Modal.Content>
            </Modal>
            </div>`}
        >
          <Button onclick={this.handleShowModal} data-modal="modal-bottom">
            Open Modal
          </Button>
          <Modal key="modal-bottom" position="bottom">
            <Modal.Content>
              <p>Modal Content</p>
              <Modal.Action>
                <Button onclick={this.handleHideModal} data-modal="modal-bottom">
                  Close
                </Button>
              </Modal.Action>
            </Modal.Content>
          </Modal>
        </DisplayComponent>
      </Doc>
    )
  }

}

export default ModalDocs
