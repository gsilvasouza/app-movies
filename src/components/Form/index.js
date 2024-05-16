import styles from './Form.module.css'
import { categories } from '../Category';
import { useState } from 'react';

function Form(){
  const [url, setUrl] = useState();
  const [category, setCategory] = useState();

  const [videos, setVideos] = useState([])
  const [errors, setErrors] = useState('')

  function valideUrl(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

    if(!regex.test(url) || url.length < 43) {
        setErrors('ERRO: URL inválida!')
        return false
    } else {
        return url.substring(32, 43) // id do video
    }
  }

  function onSave(event){
    event.preventDefault();
    console.log(url, category)

    //Validar categorie
    if(!category || category === "-"){
      console.log('Escolhar uma categoria')
      setErrors('ERRO: Escolhar uma categoria!')
      return
    }else{
      setErrors('')
    }

    //validar url
    const urlVideo = valideUrl(url)

    if(urlVideo && category){
      //guardar a url e a category
      const newVideo = {url, category}
      setVideos([...videos, newVideo])
      console.log(...videos)
      //criando o local storage
      localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
      //limpar o form
      setUrl('')
      setCategory('')
    }else{
      setErrors('ERRO: URL inválida')
    }
  }

  return(
    <section className={styles.container}>
      <h2>Cadastro de vídeo</h2>
      <form onSubmit={onSave}>
        <div>
          <label>URL do vídeo</label>
            <input
              type="text"
              placeholder="Digite a URL do vídeo"
              required="required"
              value={url}
              onChange={event => setUrl(event.target.value)}
              minLength="43"
              maxLength="43"
            />
        </div>
        <div>
          <label>Categoria</label>
            <select
              value={category}
              onChange={event => setCategory(event.target.value)}
            >
              <option value="-">Selecione uma categoria</option>
              {categories.map((category) => {
                return <option value={category}>{category}</option>
              })}
            </select>
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
      </form>
      <div>
        {errors}
      </div>
    </section>
  )
}

export default Form;