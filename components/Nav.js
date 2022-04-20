import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'>DashBoard</Link>
            </li>
            <li>
                <Link href='/product'>Products</Link>
            </li>
            <li>
                <Link href='/logistics'>Logistics</Link>
            </li>

            <li>
                <Link href='/order'>Orders</Link>
            </li>

             <li>
                <Link href='/display'>Display</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav