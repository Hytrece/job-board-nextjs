export function CategoryFilter() {
    return (
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full">All</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">Destination</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">Culinary</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">Lifestyle</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">Tips & Hacks</button>
        <div className="ml-auto flex items-center">
          <span className="mr-2 text-gray-600">Sort by:</span>
          <select className="px-2 py-1 border rounded-md">
            <option>Newest</option>
            <option>Oldest</option>
            <option>Popular</option>
          </select>
        </div>
      </div>
    )
  }
  
  