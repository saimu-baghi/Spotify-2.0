import Header from '@/components/Header'
import SearchInput from '@/components/SearchInput'
import React from 'react'

function Search() {
  return (
    <div className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
        <Header>
            <div className='mb-2 flex flex-col gap-y-6'>
                <h1 className='text-white text-3xl font-semibold'>
                    Search
                </h1>
                <SearchInput />
            </div>
        </Header>
    </div>
  )
}

export default Search