import react from 'react'
import Navbar from '../AllFilesComponents/Navbar/Navbar';
import Header from '../AllFilesComponents/Header/Header';
import About from '../AllFilesComponents/About/About';
import Education from '../AllFilesComponents/Education/Education';
import Experience from '../AllFilesComponents/Experience/Experience';
import Certificate from '../AllFilesComponents/Certificates/Certificate';
import Skills from '../AllFilesComponents/Skills/Skills';
import Protfolio from '../AllFilesComponents/Protfolio/protfolio';
import Graphic from '../AllFilesComponents/graphic/Graphic';
import Resume from '../AllFilesComponents/CheckResume/Resume';
import Contact from '../AllFilesComponents/Contact/Contact';
import Footer from '../AllFilesComponents/Footer/Footer';



function Home() {


    return <>
       
        <Header />
        <About />
        <Skills />
        <Protfolio/>
        <Resume/>
        <Contact/>
      
    </>

}


export default Home;