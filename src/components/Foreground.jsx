import React, { useState, useRef, useEffect } from 'react';
import Card from './Card.jsx';
function Foreground() {
  const ref = useRef(null);
  const [data, setData] = useState([]);

  // Retrieve data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('cardData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newData = {
      title: formData.get('title'),
      desc: formData.get('desc'),
    };

    // Add new data to existing data array
    const updatedData = [...data, newData];
    setData(updatedData);
    // Store updated data in localStorage
    localStorage.setItem('cardData', JSON.stringify(updatedData));
    // Reset the form
    e.target.reset();
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input className="text-zinc-200 rounded-md outline-none border-2 mr-4 border-[#cdea66] px-5 py-1 bg-transparent"  name="title" placeholder="Title" required />
        <input className="text-zinc-200 rounded-md outline-none border-2 border-[#cdea66] px-5 py-1 bg-transparent"  name="desc" placeholder="Description" required />
        <button className="ml-4 bg-zinc-800 text-zinc-400 border-2 border-[#cdea66] px-4 py-1 rounded-md" type="submit">Add Note</button>
        </form>
      <div ref={ref} className='fixed top-0 left-0 z-[3] mt-10 w-full h-full flex gap-10 flex-wrap p-6'>
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
