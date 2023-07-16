  import React from 'react';
  import SearchIcon from '@mui/icons-material/Search';
  import { useGlobalAppContext } from '../context/AppContext';

  const SearchFilter = () => {
    const [searchInput, setSearchInput] = React.useState("")
    const {ContextState} = useGlobalAppContext();

    function enteredName(event) {
        setSearchInput(() => {
        return event.target.value;
        })
    }
     const keys = ['title', 'description', 'category'];

    const search = (data) => {
        return (data.filter(user=> keys.some((key) => user[key].toLowerCase().includes(searchInput.toLowerCase()))))
    }

    return (
            <div className="header-search">
                <span className='header-all'>All</span>
                <input 
                    className='header-search-Input' 
                    type="text" 
                    placeholder='Search Amazon.in'
                    onChange={enteredName}
                    id="mySearch" 
                />
                <SearchIcon className='header-searchIcon' />
                {/* {console.log(search(ContextState.products))} */}
            </div>  
    )
  }
  
  export default SearchFilter;