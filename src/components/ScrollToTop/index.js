import styles from './ScrollToTop.module.css'

function ScrollToTop(){
  const handleClick = () =>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  };

  return(
    <button
      className={styles.button}
      onClick={handleClick}
    >
      &#9650
    </button>
  )
}

export default ScrollToTop;