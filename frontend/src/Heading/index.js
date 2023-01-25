import Typewriter from '../Typewriter';
import './style.css';

const Heading = ({ title }) => (
   <div className="heading">
      <h2>
         <span className="highlight">&#123;</span>
         <span className='title'>
            <Typewriter content={ title }/>
         </span>
         <span className="highlight">&#125;</span>
      </h2>
   </div>
);

export default Heading;