import './styles.css';
import cloud from './assets/img/Cloud.svg';
import domain from './assets/img/Domain.svg';
import soft from './assets/img/Software.svg';
import { useEffect } from 'react';
import { WindowSharp } from '@mui/icons-material';

function App() {
  useEffect(() => {
    
  }, []);
  return (
    <div className='container'>
      <header className='app-header'>
        <nav className='app-navebar'>
          <div className='logo'>
            <span>Logo</span>Company
          </div>
          <div className='toggle'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className='menu'>
            <li>
              <a href='#about'>about</a>
            </li>
            <li>
              <a href='#services'>services</a>
            </li>
            <li>
              <a href='#contacts'>contacts</a>
            </li>
          </ul>
          <div className='btn-user'>
            <button className='btn-login'>login</button>
            <button className='btn-signup'>sign up</button>
          </div>
        </nav>
        <div className='hero-section'>
          <div className='content-text'>
            <h1>TI Solution</h1>
            <p>
              TI Solution, specialized in Infrastructure optimization,
              Streamlining business process, resource utilization, and revenue
              optimization.
            </p>
          </div>
          <button className='seemore'>see more</button>
        </div>
      </header>
      <section className='ourservices'>
        <h1>Our Services</h1>
        <div className='card-container'>
          <div className='card'>
            <img src={soft} alt='software development' />
            <h1>software development</h1>
            <p>
              is the process of conceiving, specifying, designing, programming,
              documenting, testing, and bug fixing involved in creating and
              maintaining applications, frameworks, or other software
              components.
            </p>
            <span>$ 80.000 AOA</span>
            <button>Buy</button>
          </div>
          <div className='card'>
            <img src={domain} alt='Domain Selling' />
            <h1>Domain Selling</h1>
            <p>
              Custom domains are necessary to help your customers find you.
              Start your domain search! Save 25% on all new domain names.
            </p>
            <span>$ 10.000 AOA</span>
            <button>Buy</button>
          </div>
          <div className='card'>
            <img src={cloud} alt='Hosting in Cloud' />
            <h1>Hosting in Cloud</h1>
            <p>
              Cloud hosting makes applications and websites accessible using
              cloud resources. Unlike traditional hosting, solutions are not
              deployed on a single server.
            </p>
            <span>$ 20.000 AOA</span>
            <button>Buy</button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
