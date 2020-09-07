import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter lowercase leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Cat vs Code</a>
      </Link>
      
    </h2>
  )}