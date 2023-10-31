

// DogFact Component
export const DogFact = ({facts, handleClick, loading}) => {

  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop. We'll call this 'cleanFact'.
  // Cleaning our data means choosing and keeping a somewhat small fraction of the data, the most useful data.

  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return <div>
        {loading ? <div>Loading...</div> 
        : 
        <div>
          <ul>
            {facts.map((fact) => (
              <li key={fact.id}><p>{fact.attributes.body}</p></li>
              ))}
          </ul>
        </div>
        }
        <button onClick={handleClick}>Get dog info</button>
    </div>;
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
