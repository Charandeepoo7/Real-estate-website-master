import React, { useState } from 'react';

const Search = ({ onSelectUniversity }) => {
  const [isOpen, setIsOpen] = useState(false);
  const universities = [
    "Manipal Academy of Higher Education",
    "Manipal Institute of Technology (VIT)",
    "Birla Institute of Technology and Science (BITS Pilani)",
  ];

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSelectUniversity = (selectedUniversity) => {
    onSelectUniversity(selectedUniversity); // Pass the selected university to the parent component
    closePopup();
  };

  return (
    <>
      <button onClick={openPopup}>Select University</button>
      {isOpen && (
        <div className="popup">
          <h2>Select Your University</h2>
          <ul>
            {universities.map((university) => (
              <li key={university} onClick={() => handleSelectUniversity(university)}>
                {university}
              </li>
            ))}
          </ul>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </>
  );
};

export default Search;
