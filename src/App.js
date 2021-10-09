import colour from './media/colour.jpg';
import sunset from './media/sunset.jpg';
import building from './media/building.jpg';

import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

console.log(window.innerWidth)

function App() {
  return (
    <div className="homepage">
      <div className="homepage-h1-wrap">
          <div><h1>Seth Jurgens</h1></div>
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
            <div>
                <img src={colour} />
                <p className="legend">Image by Andrew Haimerl</p>
            </div>
            <div>
                <img src={sunset} />
                <p className="legend">Image by Jezael Melgoza</p>
            </div>
            <div>
                <img src={building} />
                <p className="legend">Image by Levon Vardanyan</p>
            </div>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
