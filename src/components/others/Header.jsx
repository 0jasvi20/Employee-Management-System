import React from 'react'

const Header = ({ onLogout, name }) => {
  return (
    <div className='flex justify-between items-end'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{name} 👋</span>
      </h1>
      <button
        className='bg-red-600 text-white px-5 py-2 rounded-full'
        onClick={onLogout}
      >
        Log Out
      </button>
    </div>
  )
}

export default Header