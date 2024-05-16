import styles from "./VideoList.module.css"
import Card from '../Card'

function VideoList({videos, emptyHanding}){
  const count = videos.length
  let heading = emptyHanding

  if(count > 0){
    const noun = count > 1 ? 'vídeos' : 'video'
    heading = `${count} ${noun}`
  }

  return(
    <>
      <h2>{heading}</h2>
      <section className={styles.videoList}>
        {
          videos.map((video) => 
            <Card id={video.id} key={video.id} />
          )
        }
      </section>
    </>
  )
}

export default VideoList;