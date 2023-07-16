  import React from 'react';
  import SearchIcon from '@mui/icons-material/Search';
  import { useGlobalAppContext } from '../context/AppContext';
  import './SearchFilter.css'

  const SearchFilter = () => {
    const [searchInput, setSearchInput] = React.useState("")
    const [isFocussed, setIsFocussed] = React.useState(false)
    const {ContextState} = useGlobalAppContext();

    const handleFocus = () => {
        setIsFocussed(true);
    }

    const handleBlur = () => {
        setIsFocussed(false);
    }

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
            <div tabindex="0" className="header-search">
                <form className={`search-form ${isFocussed ? 'focussed' : ''}`}>
                    <button className='header-all'>All</button>
                    <input 
                        className='header-search-Input' 
                        type="text" 
                        placeholder='Search Amazon.in'
                        onChange={enteredName}
                        id="mySearch" 
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <button className='header-searchIcon'><SearchIcon /></button>
                </form>
                {/* {console.log(search(ContextState.products))} */}
            </div>  
    )
  }
  
  export default SearchFilter;