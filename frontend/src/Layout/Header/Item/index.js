import { NavLink } from 'react-router-dom';
import './style.css';

const Item = ({ name, path }) => (
   <NavLink to={ path }>
      <span className="prefix">~/</span>
      <span className="content">{ name }</span>
   </NavLink>
);

export default Item;