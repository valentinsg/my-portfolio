import React, { useState } from 'react';
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [selectedSection, setSelectedSection] = useState('Home');
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.900', 'gray.100');

  const renderSection = () => {
    switch (selectedSection) {
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
    <Box className="App" bg={bgColor} color={color} transition="all 0.3s ease-in-out">
      <Box p={10}>
        <Sidebar />
        <Header 
          selectedSection={selectedSection} 
          setSelectedSection={setSelectedSection}
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
        <Box ml={{ base: 0, md: "23vw" }} mt={8} p={6}>
          {renderSection()}
        </Box>
      </Box>
    </Box>
  );
}

export default App;