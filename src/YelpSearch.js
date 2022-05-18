import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from './Spinner';
import { getYelpResults } from './services/fetch-utils';
import BusinessList from './BusinessList';

export default function YelpSearch() {
  const [yelpData, setYelpData] = useState([]);
  const [yelpQuery, setYelpQuery] = useState('portland');
  const [isLoading, setIsLoading] = useState(false);

    // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.

  async function load() {
    setIsLoading(true);
    // console.log(yelpQuery, 'yelpQuery');
    const data = await getYelpResults(yelpQuery);
    setYelpData(data.data.businesses);
    
    setIsLoading(false);

    
  }

  useEffect(() => {
    load();

  }, []);

  async function handleYelpSubmit(e) {
    e.preventDefault();
    load();
  
    // set the loading state to true
    // use fetch to make a request to your netlify yelp function. Be sure to pass the search query as a query param in the URL
  
    // put the jsonified data in state and set the loading state to false
  }
  
  return (
    <section className='yelp'>
      {/* make the fetch on submit */}
      <form onSubmit={handleYelpSubmit}>
        Search for a business near you:
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <input onChange={e => setYelpQuery(e.target.value)}>

        </input>
        <button>Search yelp</button>
      </form>
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      { isLoading
        ? <Spinner /> 
        : <BusinessList businesses={yelpData}/>}
    </section>
  );
}
  
