import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Container from '../../components/Container'
import Card from '../../components/Card';
/*importando a função e constante de outro arquivo*/
import Category, {categories, filterCategory} from '../../components/Category';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <>
      <Header/>
      <Banner image="home"/>
      <Container>
        {
          categories.map((category,index) =>
          <Category category = {category}>
            <Carousel>
              {
                filterCategory(index).map((video) => 
                  <Card id={video.id} key={video.id}/>
                )
              }
            </Carousel>
          </Category>)
        } 
      </Container>
      <Footer/>
    </>
  );
}

export default Home;
