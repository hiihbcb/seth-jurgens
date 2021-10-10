/**
* @Author HIIHBCB
*/

import sethj from '../media/images/sethj-min.jpg';

import '../css/Global.css';
import '../css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
      <heading>
        <div className="header-full">
          <div className="header-wrap">
              <img src={sethj} alt="Seth Jurgens"/>
              <div className="title-wrap">
                <h1>Seth Jurgens</h1>
                <h2>hiihbcb</h2>
              </div>
          </div>
        </div>
      </heading>
  );
}

export default Header;
