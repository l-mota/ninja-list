import styles from '../../styles/Ninjas.module.css'
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()

	return {
		props: { ninjas: data },
	}
}

export default function Ninjas({ ninjas }) {
	return (
		<>
			<Head>
				<title>Ninja List | Listing</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div>
				<h1>All Ninjas</h1>
				{ninjas.map((ninja) => (
					<Link href={'/ninjas/' + ninja.id} key={ninja.id}>
						<a className={styles.single}>
							<h3>{ninja.name}</h3>
						</a>
					</Link>
				))}
			</div>
		</>
	)
}
