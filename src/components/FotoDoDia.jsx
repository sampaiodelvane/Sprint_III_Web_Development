const FotoDoDia = (props) => {
  return (
    <section className="photo-of-day">
      <div className="photo-of-day-text">
        <h2>Foto do dia</h2>
        <p>
          Seu aparelho V70 sorteia uma foto da sua galeria toda vez que voce abre a
          pagina. A de hoje e: <strong>{props.nome}</strong>.
        </p>
      </div>

      <img src={props.imagem} alt={props.nome} />
    </section>
  )
}

export default FotoDoDia
