import sethj from './media/sethj-min.jpg';
import colour from './media/colour-min.jpg';
import building from './media/building-min.jpg';
import sunset from './media/sunset-min.jpg';
import alley from './media/alley-min.jpg';
import punk from './media/punk-min.jpg';
import arcade from './media/arcade-min.jpg';

import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="homepage">
      <div className="homepage-h1-wrap">
          <div>
              <img src={sethj} alt="Seth Jurgens"/>
              <h1>Seth Jurgens</h1>
          </div>
      </div>
      <div className="homepage-carousel-wrapper">
        <Carousel className="homepage-carousel"
                  showArrows={false}
                  autoPlay={true}
                  autoFocus={false}
                  swipeable={false}
                  stopOnHover={false}
                  showIndicators={false}
                  showStatus={false}
                  showThumbs={false}
                  useKeyboardArrows={false}
                  transitionTime={4000}
                  interval={24000}
                  infiniteLoop={true}>
            <div style={{ backgroundImage: `url(${colour})` }} alt="Random colours">
                <p className="legend">Image by Andrew Haimerl</p>
            </div>
            <div style={{ backgroundImage: `url(${building})` }} alt="Neon building">
                <p className="legend">Image by Levon Vardanyan</p>
            </div>
            <div style={{ backgroundImage: `url(${sunset})` }} alt="Sunset over the city">
                <p className="legend">Image by Jezael Melgoza</p>
            </div>
            <div style={{ backgroundImage: `url(${alley})` }} alt="Neon alleyway">
                <p className="legend">Image by Hin Bong Yeung</p>
            </div>
            <div style={{ backgroundImage: `url(${punk})` }} alt="Man standing on metal">
                <p className="legend">Image by Drew Graham</p>
            </div>
            <div style={{ backgroundImage: `url(${arcade})` }} alt="Old arcade">
                <p className="legend">Image by Ben Neale</p>
            </div>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
