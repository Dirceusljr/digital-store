import Button from '../Button'
import Link from '../Link'
import Logo from '../Logo'
import SearchBar from '../SearchBar'
import Title from '../Title'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.container}>
      <div className={style.logo}>
        <Logo />
        <Title />
      </div>
      <SearchBar />
      <div className={style.button}>
        <Link>Cadastre-se</Link>
        <Button>Entrar</Button>
      </div>
    </header>
  )
}

export default Header