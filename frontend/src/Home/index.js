import Heading from '../Heading';
import './style.css';

const Home = () => (
	<section id="home">
      <div>
         <h1><span className="highlight">B</span>en</h1>
         <h1><span className="highlight">P</span>rice</h1>
      </div>
		<div>
			<Heading title='about' />
         <p>
				I've been interested in -and learning Computer Science from the age of 12.
            I consider myself very versatile and have a passion for learning new technologies. 
         </p>
      </div>
   </section>
);

export default Home;