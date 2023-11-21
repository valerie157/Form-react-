import {React, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap'; 


const Dashboard = () => {
  // const [selectedOption, setSelectedOption] = useState(''); 
  // const handleDropdownSelect = (eventKey) => {
  //   setSelectedOption(eventKey); 
  // };

  return (
    <div>
      <h2>This is my Dashboard</h2>
      {/* <DropdownButton title="Dropdown" onSelect={handleDropdownSelect} variant="primary">
        <Dropdown.Item eventKey="option1">Option 1</Dropdown.Item>
        <Dropdown.Item eventKey="option2">Option 2</Dropdown.Item>
        
      </DropdownButton>
      {selectedOption && <p>Selected: {selectedOption}</p>}
      
      {selectedOption === 'option1' && <p>Content for Option 1</p>}
      {selectedOption === 'option2' && <p>Content for Option 2</p>} */}
     
    </div>
  );
};

export default Dashboard;
