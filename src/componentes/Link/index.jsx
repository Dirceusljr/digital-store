import style from './Link.module.css'

const Link = ({hover = false, children}) => {
  return (
    <a href="#" className={hover ? style.linkHover : style.link}>{children}</a>
  )
}

export default Link