import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'

const Post = ({data}) =>{

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>{data.name}</h1>
            <div className={styles.description}>height: {data.height}</div>
            <div className={styles.description}>weight: {data.weight}</div>
            <div className={styles}>
                <img src={data.sprites.other.dream_world.front_default}
                    alt='pokemon image'
                    height={250}
                    weight={250}
                />
            </div>
        </div>
    );
}

export default Post;

// indicate the following is a server-side rendering page
export async function getServerSideProps(context){ // syntax: url/CONTEXT
    const {id} = context.query;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
        (data) => data.json()
    );
    return {
        props: { data: res}, // pass to "data" in this page
    };
}