import Banner from "Components/Banner";
import styles from './Home.module.css'
import Titulo from "Components/Titulo";
import Card from "Components/Card";
import { useEffect, useState } from "react";




function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/rodrigoarcanjo23/cinetag/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])
    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>
                    Um lugar para guardar seus vídeos e filmes!
                </h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>

        </>

    )
}

export default Home