import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';

// Example components for rendering in the middle section
const Home = () => <Box p={8} fontSize="2xl">This is Home</Box>;
const Projects = () => <Box p={8} fontSize="2xl">These are Projects</Box>;
const About = () => <Box p={8} fontSize="2xl">About Me</Box>;
const Resume = () => <Box p={8} fontSize="2xl">Resume Section</Box>;
const Contact = () => <Box p={8} fontSize="2xl">Contact Info</Box>;

function App() {
  // State to track the current page/component
  const [selectedPage, setSelectedPage] = useState("Home");

  const renderPage = () => {
    switch (selectedPage) {
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Projects />;
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <Box className="App">
      <Box display="flex">
        <Sidebar />
        <Box flex="1" ml={{ base: 0, md: "23vw" }} mt={10} p={6}>
          <Header setSelectedPage={setSelectedPage} />
          {/* Render the selected page in the center */}
          {renderPage()}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
