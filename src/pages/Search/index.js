import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Search.module.css'
import Container from '../../components/Container'
import videosdb from '../../json/videos.json'
import SearchVideoList from '../../components/SearchVideoList'

function Search(){
  return (
    <>
      <Header />
        <Container>
          <section className={styles.search}>
            <h2>Pesquisar</h2>
            <SearchVideoList videos={videosdb}/>
          </section>
        </Container>
      <Footer />
    </>
  )
}

export default Search;