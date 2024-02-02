import style from './Link.module.css'

const Link = ({children}) => {
  return (
    <a href="#" className={style.link}>{children}</a>
  )
}

export default Link