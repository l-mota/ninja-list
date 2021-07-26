import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
	return (
		<>
			<Head>
				<title>Ops... 404 Not Found</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="not-found">
				<h1>Ops...😕</h1>
				<h2>Looks like the page you want access doesn&apos;t exist</h2>
				<p>
					Go back to{' '}
					<Link href="/">
						<a>Home</a>
					</Link>
				</p>
			</div>
		</>
	)
}
