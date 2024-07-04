import Nullstack from 'nullstack'

import { Link } from 'daisyui'

import DisplayComponent from '../utils/DisplayComponent'
import Doc from '../utils/Doc'

class LinkDocs extends Nullstack {

  render() {
    return (
      <Doc name="Link" description="Link is used to navigate to another page.">
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
