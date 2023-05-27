import Header from "./components/Header";
import Banner from "./components/Banner";
import Expert from "./components/Expert";
import NewsLetter from "./components/NewsLetter";
import Plans from "./components/Plans.jsx";
// use CDN in Tailwind CSS 
// <script src="https://cdn.tailwindcss.com"></script> 

function MiniApp() {

  return (
    <>
      <Header/>
      <Banner/>
      <Expert/>
      <NewsLetter/>
      <Plans/>
      
    </>
  );
}
export default MiniApp;