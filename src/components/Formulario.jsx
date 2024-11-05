import { GridGallery } from "./GridGallery"

export const Formulario = () => {
    return (
        <form id="formulario">
            <input type="text" placeholder="buscar fotos" />
            <input type="submit" value="buscar" />
            <GridGallery/>
        </form>
    )
}
