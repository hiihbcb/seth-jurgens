/**
* @Author HIIHBCB
*/

import colour from '../media/images/colour-min.jpg';
import building from '../media/images/building-min.jpg';
import sunset from '../media/images/sunset-min.jpg';
import alley from '../media/images/alley-min.jpg';
import punk from '../media/images/punk-min.jpg';
import arcade from '../media/images/arcade-min.jpg';

import '../css/Global.css';
import '../css/Background.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Background() {
  return (
      <div className="background-wrapper">
        <Carousel className="background"
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
                <span style={{ backgroundImage: `url(${colour})` }} alt="Random colours"/>
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
  );
}

export default Background;
