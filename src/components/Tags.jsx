function Badge({color, texto}){
    const colorTemplate =`badge text-bg-${color}`
    return <span class={colorTemplate}>{texto}</span>
}

export default Badge