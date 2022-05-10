A cada arquivo novo na pasta page, é gerado uma nova rota.

exemplo:
```js
import Link from "next/link"

export default function Products() {
    return (
        <>
            <h1>Páginas de produtos</h1>
            <Link href="/">Voltar</Link>
        </>
    )
}
```