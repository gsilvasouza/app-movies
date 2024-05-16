import styles from "./SearchVideoList.module.css"
import VideoList from "../VideoList"
import { useState } from "react"

function filterVideos(videos, searchText){
  return videos.filter(
    (video) => 
      video.category.includes(searchText) || 
    video.title.includes(searchText)
  )
}

function SearchVideoList({videos}){
  const [searchText, setSearchText] = useState();
  const foundVideos = filterVideos(videos, searchText);

  return(
    <section className={styles.container}>
      <input 
        type="search"
        placeholder="Pesquisar..."
        onChange={ event => setSearchText(event.target.value)}
      />
      <VideoList 
        videos={foundVideos}
        emptyHanding={`Sem vídeos sobre ${searchText}`}
        />
    </section>
  )
}

export default SearchVideoList