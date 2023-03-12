import Svgs from './Svgs/Svgs';
import NavigationMenu from './Hamburger/NavigationMenu';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <NavigationMenu/>
      {/* <Navbar/> */}
      <Svgs/>   
    </div>
  );
}

export default Home;
