import Banner from 'Components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'Components/Titulo';
import Card from 'Components/Card';
import { useFavoritoContext } from 'contextos/Favoritos';

function Favoritos () {
    const { favorito } = useFavoritoContext();
    return(
        <>
        <Banner imagem='favoritos' />
        <Titulo>
            <h1>
                Meus favoritos
            </h1>
        </Titulo>
        <section className={styles.container}>
           {favorito.map((fav) => {
            return <Card {...fav} key={fav.id} />
           })}
        </section>
        </>
    )
}

export default Favoritos