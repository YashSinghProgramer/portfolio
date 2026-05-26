import React from 'react';
import Appe from './Appe.jsx'; 
import { ThemeProvider } from './ThemeContext.jsx'; // Provider import kiya

const test = () => {
  return (
    // Ab yahan se koi prop pass karne ki zaroorat nahi hai!
    <ThemeProvider>
      <Appe />
    </ThemeProvider>
  );
};

export default test;