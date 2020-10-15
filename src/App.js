import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'
import { Header, Search, Profile, Repos } from './components'
import { Container } from 'react-bootstrap'


function App() {
  const [query, setQuery] = useState('')
  const [profileData, setProfileData] = useState([])
  const [reposData, setReposData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/users/luuanfaria`)
        const repos = await axios.get(`https://api.github.com/users/luuanfaria/repos?per_page20`)
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
    <Container>
        <Header />
        <Search inputQ={setQuery} />
        <Profile data={profileData} />
        <Repos data={reposData} />
      </Container>
  );
}

export default App;
