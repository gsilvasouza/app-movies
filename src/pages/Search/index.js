import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Search.module.css'
import Container from '../../components/Container'
import videosdb from '../../json/videos.json'
import SearchVideoList from '../../components/SearchVideoList'
import ScrollToTop from '../../components/ScrollToTop';

function Search(){
  return (
    <>
      <Header />
        <Container>
          <section className={styles.search}>
            <SearchVideoList videos={videosdb}/>
          </section>
        </Container>
        <ScrollToTop />
      <Footer />
    </>
  )
}

export default Search;