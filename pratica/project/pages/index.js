import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
        <meta name="keyworkds" content="Roupas, Calçados, Boné"></meta>
      </Head>
      <div>
        <h1>Hello world Next.js</h1>
      </div>
      <Image src="/images/city.jpg" width="400px" height="500px" alt="Cidade a noite" />
    </>
  )
}
