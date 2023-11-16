function Badge({color, texto}){
    const colorTemplate =`badge text-bg-${color}`
    return <span className={colorTemplate}>{texto}</span>
}

export default Badge