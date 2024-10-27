/*
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIs } from './actions'; // Adjust the path to where your actions are defined
import './App.css'; // Import your CSS file

const App = () => {
  const dispatch = useDispatch();
  const apis = useSelector(state => state.api.apis) || [];

  useEffect(() => {
    dispatch(fetchAPIs());
    console.log('Fetching APIs');
  }, [dispatch]);

  return (
    <div>
      {apis.length > 0 ? (
        <div className="card-container">
          {apis.map(api => (
            <div key={api.id} className="card">
              <a href={api.url}>{api.name}</a>
              <p>{api.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
*/

/*
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIs } from './actions'; // Adjust the path to where your actions are defined
import './App.css'; // Import your CSS file

const App = () => {
  const dispatch = useDispatch();
  const apis = useSelector(state => state.api.apis) || [];
  const [filter, setFilter] = useState(''); // State for filter

  useEffect(() => {
    dispatch(fetchAPIs());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredApis = apis.filter(api => api.eir.includes(filter));

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by EIR (e.g., CNS)"
        value={filter}
        onChange={handleFilterChange}
      />
      {filteredApis.length > 0 ? (
        <div className="card-container">
          {filteredApis.map(api => (
            <div key={api.id} className="card">
              <a href={api.url}>{api.name}</a>
              <p>{api.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
*/

/*
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIs } from './actions'; // Adjust the path to where your actions are defined
import './App.css'; // Import your CSS file

const App = () => {
  const dispatch = useDispatch();
  const apis = useSelector(state => state.api.apis) || [];
  const [filter, setFilter] = useState(''); // State for filter

  useEffect(() => {
    dispatch(fetchAPIs());
    console.log('Fetching APIs');
  }, [dispatch]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Only apply filter if it’s not an empty string
  const filteredApis = filter ? apis.filter(api => api.eir.includes(filter)) : apis;

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by EIR (e.g., CNS)"
        value={filter}
        onChange={handleFilterChange}
      />
      {filteredApis.length > 0 ? (
        <div className="card-container">
          {filteredApis.map(api => (
            <div key={api.id} className="card">
              <a href={api.url}>{api.name}</a>
              <p>{api.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;

*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIs } from './actions'; // Adjust the path to where your actions are defined
import './App.css'; // Import your CSS file

const App = () => {
  const dispatch = useDispatch();
  const apis = useSelector(state => state.api.apis) || [];
  const [eirFilter, setEirFilter] = useState(''); // State for EIR filter
  const [searchFilter, setSearchFilter] = useState(''); // State for search filter

  useEffect(() => {
    dispatch(fetchAPIs());
  }, [dispatch]);

  const handleEirFilterChange = (e) => {
    setEirFilter(e.target.value);
  };

  const handleSearchFilterChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const filteredApis = apis.filter(api => {
    const eirMatch = !eirFilter || api.eir.includes(eirFilter);
    const searchMatch = !searchFilter || 
      api.name.toLowerCase().includes(searchFilter.toLowerCase()) || 
      api.description.toLowerCase().includes(searchFilter.toLowerCase());
    return eirMatch && searchMatch;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by EIR (e.g., CNS)"
        value={eirFilter}
        onChange={handleEirFilterChange}
      />
      <input
        type="text"
        placeholder="Search name or description"
        value={searchFilter}
        onChange={handleSearchFilterChange}
      />
      {filteredApis.length > 0 ? (
        <div className="card-container">
          {filteredApis.map(api => (
            <div key={api.id} className="card">
              <a href={api.url}>{api.name}</a>
              <p>{api.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;

