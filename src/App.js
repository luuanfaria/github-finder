import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'
import { Header, Search, Profile, Repos } from './components'

function App() {
  const [query, setQuery] = useState('')
  const [profileData, setProfileData] = useState([])
  const [reposData, setReposData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/users/Markusppp`)
        const repos = await axios.get(`https://api.github.com/users/Markusppp/repos?per_page20`)
        setProfileData(data)
        setReposData(repos.data)
      } catch (error) {
        console.log(error)
      }

    }
    fetchApi()
  }, [])

  useEffect(() => {
    const fetchApi = async () => {
      if (query !== '') {
        try {
          const { data } = await axios.get(`https://api.github.com/users/${query}`)
          const repos = await axios.get(`https://api.github.com/users/${query}/repos?per_page20`)
          setProfileData(data)
          setReposData(repos.data)
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchApi()
  }, [query])

  return (
    <>
      <Header />
      <Search inputQ={setQuery} />
      <Profile data={profileData} />
      <Repos data={reposData} />

    </>
  );
}

export default App;
