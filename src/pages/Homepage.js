/**
* @Author HIIHBCB
*/

import Header from '../components/Header';

import samurai from '../media/images/samurai.jpg';
import sj from '../media/images/sj.png';
import github from '../media/images/github.png';

import Background from '../components/Background';

import '../css/Global.css';
import '../css/Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  return (
    <div className="homepage">
      <Header/>
      <HomepageContent/>
      <Background/>
    </div>
  );
}

function HomepageContent () {
  return (
    <div className="homepage-content-wrap">
      <div className="homepage-content-jonnybot">
        <a href="https://github.com/hiihbcb/jonny-silverhand" target="__blank" >
          <img src={samurai} alt="Jonny Bot Logo"/>
          <h3>Jonny Bot</h3>
        </a>
      </div>
      <div className="homepage-content-website">
        <a href="https://github.com/hiihbcb/seth-jurgens" target="__blank" >
          <img src={sj} alt="Seth Jurgens Website Logo"/>
        </a>
      </div>
      <div className="homepage-content-github">
        <a href="https://github.com/hiihbcb/" target="__blank" >
          <img src={github} alt="Github Logo"/>
        </a>
      </div>
    </div>
  );
}

export default Homepage;
