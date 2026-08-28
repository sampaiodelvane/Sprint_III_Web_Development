const CardFoto = (props) => {
  return (
    <div className="photo-card">
      <img src={props.imagem} alt={props.nome} />
      <p className="photo-category">{props.categoria}</p>
      <h3>{props.nome}</h3>
      <p className="photo-detail">{props.tamanho} MB</p>
      <p className="photo-detail">{props.data}</p>
    </div>
  )
}

export default CardFoto
