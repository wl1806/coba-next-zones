import Link from 'next/link'
import dynamic from 'next/dynamic'

export default () => (
  <div>
    <p>GSAdmin page</p>
    <div>
      <a href="/blog">Blog</a>
    </div>
    <div>
      <a href="/home">Home</a>
    </div>
    <div>
      <Link href="/about">
        <a>About us</a>
      </Link>
    </div>    
  </div>
)
