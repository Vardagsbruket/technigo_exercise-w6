// Import required  hooks
import { useEffect, useState } from "react";
import { DogFact } from "./components/DogFact";



export const App = () => {
  
  // Hint: Initialize state for storing the dog fact
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(false)

  // Hint: Define the API endpoint
  const API = "https://dogapi.dog/api/v2/facts";

  // Hint: Create a function to fetch the dog fact
  
//fetchDog();


  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  useEffect(() => {
    const fetchDog = () => {
      if (loading) {
      fetch(API)
      .then(res => res.json())
      .then(response => {setFacts(response.data); console.log(response.data)
      setLoading(false)
      }) .catch(Error=>console.error('Error fetching data:', Error))
    }
  }
  fetchDog();
  }, [loading])

  const handleClick = () => {
    setLoading(true);
  }

  return (
    <div className="App">
      <DogFact facts={facts} handleClick={handleClick} loading={loading}/>
    </div>
  );
};
