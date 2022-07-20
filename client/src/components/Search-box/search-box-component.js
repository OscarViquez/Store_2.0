import React from 'react'
import './search-box-styles.css'

const SearchBox = (props) => {
    return (
        <div className='search-container'>
            <h2 className='search__title'>
                Search Products
            </h2>
            <input
                className={props.className}
                type='search'
                placeholder={props.placeholder}
                onChange={props.onChangeHandler} />
        </div>
    )
}

export default SearchBox 