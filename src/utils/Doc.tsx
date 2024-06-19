import Nullstack, { NullstackClientContext } from 'nullstack'

type DocProps = {
  name: string
  description?: string
}

class Doc extends Nullstack<DocProps> {

  render({ children, name, description }: NullstackClientContext<DocProps>) {
    return (
      <div class="flex flex-col px-4 grow">
        <h1 class="text-4xl ">{name}</h1>
        <p class="pb-4">{description}</p>
        <hr />
        <div class="flex flex-col gap-4 items-left">{children}</div>
      </div>
    )
  }

}

export default Doc
