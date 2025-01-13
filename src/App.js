/*
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIs } from './actions'; // Adjust the path to where your actions are defined
import './App.css'; // Import your CSS file

const App = () => {
  const dispatch = useDispatch();
  const apis = useSelector(state => state.api.apis) || [];
  const [eirFilter, setEirFilter] = useState(''); // State for EIR filter
  const [searchFilter, setSearchFilter] = useState(''); // State for search filter
  const [dropdownVisible, setDropdownVisible] = useState({}); // State for dropdown visibility

  useEffect(() => {
    dispatch(fetchAPIs());
  }, [dispatch]);

  const handleEirFilterChange = (e) => {
    setEirFilter(e.target.value);
  };

  const handleSearchFilterChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const toggleDropdown = (id) => {
    setDropdownVisible(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
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
              {api.eir.length > 0 && (
                <div>
                  <button onClick={() => toggleDropdown(api.id)}>
                    {dropdownVisible[api.id] ? 'Hide EIR' : 'Show EIR'}
                  </button>
                  {dropdownVisible[api.id] && (
                    <div className="dropdown">
                      <ul>
                        {api.eir.map((eirItem, index) => (
                          <li key={index}>{eirItem}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
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
  const apis = useSelector(state => state.api.apis.map(api => ({
    ...api,
    eir: api.eir || []
  }))) || [];
  const [eirFilter, setEirFilter] = useState(''); // State for EIR filter
  const [searchFilter, setSearchFilter] = useState(''); // State for search filter
  const [dropdownVisible, setDropdownVisible] = useState({}); // State for dropdown visibility

  useEffect(() => {
    dispatch(fetchAPIs());
  }, [dispatch]);

  const handleEirFilterChange = (e) => {
    setEirFilter(e.target.value);
  };

  const handleSearchFilterChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const toggleDropdown = (id) => {
    setDropdownVisible(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
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
              {api.eir && api.eir.length > 0 && (
                <div>
                  <button onClick={() => toggleDropdown(api.id)}>
                    {dropdownVisible[api.id] ? 'Hide EIR' : 'Show EIR'}
                  </button>
                  {dropdownVisible[api.id] && (
                    <div className="dropdown">
                      <ul>
                        {api.eir.map((eirItem, index) => (
                          <li key={index}>{eirItem}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
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
