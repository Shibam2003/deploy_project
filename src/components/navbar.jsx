import React from 'react'

const navbar = () => {
  return (
    <header className="w-full">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-xl font-bold text-[#008B8B]">Spam Analyser</div>
        <div>
          <button className="bg-gray-800 text-white px-4 py-2 mx-1 rounded-md">About Us</button>
          <button className="bg-gray-800 text-white px-4 py-2 mx-1 rounded-md">Contact Us</button>
        </div>
      </nav>
    </header>
  )
}

export default navbar
