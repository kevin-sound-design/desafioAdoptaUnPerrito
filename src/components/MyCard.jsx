import Badge from "./Tags"

function MyCard({urlImg,nombre,descripcion, colorBadge, textBadge}){
    const alt = `imagen de ${nombre}`
    return <>
        <div className="card">
            <img src={urlImg} alt={alt}/>
            <strong>{nombre}</strong>
            <p>{descripcion}</p>
            <Badge color = {colorBadge} texto = {textBadge} />
        </div>
    </>

}

export default MyCard
