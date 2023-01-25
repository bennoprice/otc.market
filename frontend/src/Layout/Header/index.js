import Item from './Item';
import './style.css';

const Header = () => (
   <header>
      <ul>
         <li><Item name="Root" path="/" /></li>
         <li><Item name="Blog" path="/blog" /></li>
         <li><Item name="GitHub" path="/github" /></li>
      </ul>
      <ul>
         <li>Placeholder</li>
      </ul>
   </header>
);

export default Header;
