import styles from './Favorites.module.css'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import VideoList from '../../components/VideoList'
import { useFavoriteContext } from '../../context/Favorites'

function Favorites(){
  const {favorite} = useFavoriteContext();

  return(
    <>
      <Header />
      <Container>
        <section className={styles.favorites}>
          <h2>Meus Favoritos</h2>
          { <VideoList videos={favorite} emptyHanding="Sem favoritos"/>}
        </section> 
      </Container>
      <Footer />
    </>
  )
}

export default Favorites;