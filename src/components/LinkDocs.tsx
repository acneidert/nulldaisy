import Nullstack from 'nullstack'

import DisplayComponent from '@docs/utils/DisplayComponent'
import Doc from '@docs/utils/Doc'
import Sandbox, { Props } from '@docs/utils/Sandbox'
import { Link } from 'nulldaisy'

class LinkDocs extends Nullstack {

  render() {
    const PROPS: Props = {
      children: { value: 'Link', description: 'The content of the Link (can be a string or a component)' },
      color: {
        value: 'primary',
        options: [
          { name: 'Default', value: '' },
          { name: 'Primary', value: 'primary' },
          { name: 'Secondary', value: 'secondary' },
          { name: 'Accent', value: 'accent' },
          { name: 'Success', value: 'success' },
          { name: 'Info', value: 'info' },
          { name: 'Warning', value: 'warning' },
          { name: 'Error', value: 'error' },
        ],
        description: 'The color of the Link',
      },

      hover: { value: false, description: 'Adds a hover effect' },
    }
    return (
      <Doc name="Link" description="Link is used to navigate to another page.">
        <Sandbox element={Link} props={PROPS} />
        <DisplayComponent name="Default" code={`<Link >Default</Link>`}>
          <Link>Default</Link>
        </DisplayComponent>
        <DisplayComponent name="Primary" code={`<Link color="primary" >Primary</Link>`}>
          <Link color="primary">Primary</Link>
        </DisplayComponent>
        <DisplayComponent name="Secondary" code={`<Link color="secondary" >Secondary</Link>`}>
          <Link color="secondary">Secondary</Link>
        </DisplayComponent>
        <DisplayComponent name="Accent" code={`<Link color="accent" >Accent</Link>`}>
          <Link color="accent">Accent</Link>
        </DisplayComponent>
        <DisplayComponent name="Success" code={`<Link color="success" >Success</Link>`}>
          <Link color="success">Success</Link>
        </DisplayComponent>
        <DisplayComponent name="Info" code={`<Link color="info" >Info</Link>`}>
          <Link color="info">Info</Link>
        </DisplayComponent>
        <DisplayComponent name="Warning" code={`<Link color="warning" >Warning</Link>`}>
          <Link color="warning">Warning</Link>
        </DisplayComponent>
        <DisplayComponent name="Error" code={`<Link color="error" >Error</Link>`}>
          <Link color="error">Error</Link>
        </DisplayComponent>
        <DisplayComponent name="Hover" code={`<Link hover>Hover</Link>`}>
          <Link hover>Hover</Link>
        </DisplayComponent>
      </Doc>
    )
  }

}

export default LinkDocs
