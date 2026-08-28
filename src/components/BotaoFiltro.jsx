const BotaoFiltro = (props) => {
  return (
    <label className={props.classe} htmlFor={props.id}>
      {props.nome}
    </label>
  )
}

export default BotaoFiltro
