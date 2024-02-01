import React, { useState } from 'react'

const SearchBar = () => {
    const searchFilters = ['id']
    const [searchFilter, setSearchFilter] = useState(searchFilters[0])
    

    return (
        <div className='h-10'>
            <select className='outline-none bg-white h-full'
            name="searchFilter" id="searchFilter" value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}>
                {searchFilters.map((filter, index) => (
                    <option key={index} id={`${filter}`}>
                        {filter}
                    </option>
                ))}
                {/* Create option for every key in vehicleSchema */}
            </select>
            <input id="searchInpu" name='searchInput' type={"number"} 
            className='outline-none h-full'
            />
        </div>
    )
}

export default SearchBar