import Link from "next/link"
import styles from '../styles/Navigation.module.css'
const links = [{
    label: 'Home',
    route: '/'
  },{
    label: 'About',
    route: '/about'
  },
  {
    label: 'Post',
    route: '/posts'
  }

]
  

export default function NavigationPage(){

  return(
    <header className={styles.header}>
    <nav>
    <ul className={styles.navigation}>
      {links.map(({label, route}) =>(
        <li key={route}>
          <Link href={route}>
            {label}
            </Link>
        </li>
      ))}
    </ul>
    </nav>
  </header>
  )

}