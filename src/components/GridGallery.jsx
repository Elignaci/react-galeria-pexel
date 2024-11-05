import { Cards } from "./Cards"


export const GridGallery = (category) => {
    const dataFetch = [
        {
            id: 1,
            nombre: 'foto1',
            autor: 'autor1',
        },
        {
            id: 2,
            nombre: 'foto2',
            autor: 'autor2',
        },
        {
            id: 3,
            nombre: 'foto3',
            autor: 'autor3',
        },



    ]




    return (
        <>
            <section>
                <Cards />
            </section>
        </>

    )
}
