import Link from 'next/link'
import React from 'react'

type Props = {
    category : string,
    isActive : boolean
}

function NavLink({category , isActive} : Props) {
  return (
    <Link href={`/news/${category}`} className = {`navlink ${isActive && 'underline decoration-orange-400 underline-offset-8 font-bold '}`}   >
        {category}
    </Link>
  )
}

export default NavLink
