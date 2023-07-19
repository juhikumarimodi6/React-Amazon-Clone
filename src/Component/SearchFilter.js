  import React from 'react';
  import SearchIcon from '@mui/icons-material/Search';
  import { useGlobalAppContext } from '../context/AppContext';
  import './SearchFilter.css'

  const SearchFilter = () => {
    const [isFocussed, setIsFocussed] = React.useState(false)
    const {ContextState, ContextDispatch} = useGlobalAppContext();

    const handleFocus = () => {
        setIsFocussed(true);
    }

    const handleBlur = () => {
        setIsFocussed(false);
    }

    const enteredName = (event) => {
        ContextDispatch({
            type: 'SEARCH_PRODUCT_INPUT',
            payload: event.target.value
        })
    }

    return (
            <div tabIndex="0" className="header-search">
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
            </div>  
    )
  }
  
  export default SearchFilter;