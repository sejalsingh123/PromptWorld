'use client'

import {useState, useEffect} from 'react'
import PromptCard  from './PromptCard'
import {AiOutlineSearch} from 'react-icons/ai'

const PromptCardList=({data, handleTagClick})=>{
  return(
    <div className='mt-16 prompt_layout'>
      {data.map((post)=>(
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchResults, setSearchedResults] = useState([])
  const [posts, setPosts] = useState([])
  
  const filterPrompts = (searchText)=>{
    const regex = new RegExp(searchText, "i")//'i' flag for case-insensitive search
    return posts.filter((post)=>
      regex.test(post.creator.username) ||
      regex.test(post.tag) ||
      regex.test(post.prompt)
    )
  }
  const handleSearchChange = (e)=>{
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  }

  useEffect(()=>{
    const fetchPosts = async()=>{
      const resopnse = await fetch('/api/prompt')
      const data = await resopnse.json()
      setPosts(data)
    }
    fetchPosts()
  },[])
  const handleTagClick = (tagname)=>{
    setSearchText(tagname)
    const searchResult = filterPrompts(tagname);
    setSearchedResults(searchResult);
  }
  return (
    <section className='feed'>
      <form className="relative w-full flex items-center">
        <input
          type="text"
          placeholder="Search for a tag, username or any specific word..."
          value={searchText}
          onChange={handleSearchChange}
          className="w-full px-5 py-3 pr-12 rounded-xl bg-gray-100 border border-gray-300 focus:border-black focus:ring-2 focus:ring-black transition-all outline-none text-sm"
        />
        {/* Clear button → visible only when searchText exists  else search imoji visible*/}
        {searchText ? (
          <button 
            type="button"
            onClick={() => setSearchText("")}
            className="absolute right-12 top-1/2 -translate-y-1/2 p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition"
          >
            ✕
          </button>
        ):(
          <button
            type="button"
            className="absolute right-3 text-gray-600 hover:text-black transition-all"
          >
            <AiOutlineSearch size={22} />
          </button>
        )}
        
      </form>
      {searchText ? (
        <PromptCardList
          data={searchResults}
          handleTagClick={handleTagClick}
        />
      ):(
        <PromptCardList
          data={posts}
          handleTagClick={handleTagClick}
        />
      )}
    </section>
  )
}

export default Feed
