import sethj from './media/sethj.jpg';

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
                  swipeable={false}
                  stopOnHover={false}
                  showIndicators={false}
                  showStatus={false}
                  showThumbs={false}
                  useKeyboardArrows={false}
                  interval={20000}
                  infiniteLoop={true}>
            <div className="colour" alt="Random colours">
                <p className="legend">Image by Andrew Haimerl</p>
            </div>
            <div className="building" alt="Neon building">
                <p className="legend">Image by Levon Vardanyan</p>
            </div>
            <div className="sunset" alt="Sunset over the city">
                <p className="legend">Image by Jezael Melgoza</p>
            </div>
            <div className="alley" alt="Neon alleyway">
                <p className="legend">Image by Hin Bong Yeung</p>
            </div>
            <div className="punk" alt="Man standing on metal">
                <p className="legend">Image by Drew Graham</p>
            </div>
            <div className="arcade" alt="Old arcade">
                <p className="legend">Image by Ben Neale</p>
            </div>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
