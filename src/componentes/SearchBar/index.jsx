import style from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={style.inputContainer}>
      <input type="search" name="search" id="serach"  placeholder="Pesquisar produto..." className={style.bar} />
      <img src="src/assets/Search.svg" alt="Lupa" className={style.searchIcon} />
    </div>
  )
}

export default SearchBar