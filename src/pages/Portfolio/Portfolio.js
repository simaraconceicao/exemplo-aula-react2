import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ImagePortfolio from '../../assets/portfolio.svg'

import './portfolio.styles.css'

const Portfolio = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function pegaDados() {
      const response = await fetch('https://api.github.com/users/simaraconceicao/repos')
      const data = await response.json()

      setRepos(data)
    }

    pegaDados()
  }, [])
  return(
    <>
      <Menu />
      <Header image={ImagePortfolio}>Meus jobs</Header>
      <div className='main'>
        <div className='card-container'>
          {repos.map(repo => 
            <div key={repo.id} className='card'>
              <h3>{repo.name}</h3>
              <a 
                href={repo.html_url} 
                target='_blank' 
                rel='noreferrer' 
                class='enter-repo'
              >
                <BsArrowReturnRight size={16} color='#fff'/>
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Portfolio