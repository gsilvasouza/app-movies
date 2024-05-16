import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './PageNotFound.module.css'
import error404 from './erro404.png'

function PageNotFound(){
  return(
    <>
      <Header />
        <section className={styles.container}>
          <h2> Ops! Conteudo não localizado</h2>
          <img src={error404} alt="Log de pagina não localizada"/>
        </section>
      <Footer />
    </>
  )
}

export default PageNotFound;