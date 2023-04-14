import s from './Header.module.css';
function Header() {
   return (
     <header className={s.header}>
       <p className={s.headerText}>tweets</p>
     </header>
   );
}

export default Header;