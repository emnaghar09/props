import FullName from './profile/FullName';
import Bio from './profile/Bio';
import Profession from './profile/Profession';
import Photo from "./profile/photo";
import photos from "./emna.png";
import Alert from './profile/alert';

import './App.css';

function App() {
  const alertMyInput = name => alert(name);
  return (
    <div className="App">
    <div>
    <Alert  alertMyInput={alertMyInput} />
    <FullName name=" EMNA GHARIANI " />
    <Photo> <img src={photos} width="150" />  </Photo>
    <Bio age= {29} />
    <Profession prof="chemical engineer" />
    </div>
    </div>
  );
}

export default App;
