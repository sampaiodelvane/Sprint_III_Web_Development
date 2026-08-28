const Estatisticas = (props) => {
  return (
    <section className="stats">
      <h2>Historico e estatisticas</h2>
      <p>Numeros da sua galeria calculados com o objeto Math.</p>

      <div className="stats-list">
        <div className="info-card">
          <strong>{props.fotos}</strong>
          <p>Itens na galeria</p>
        </div>

        <div className="info-card">
          <strong>{props.espacoDasFotos} MB</strong>
          <p>Espaco das fotos</p>
        </div>

        <div className="info-card">
          <strong>{props.media} MB</strong>
          <p>Media por foto</p>
        </div>

        <div className="info-card">
          <strong>{props.maior} MB</strong>
          <p>Maior arquivo</p>
        </div>

        <div className="info-card">
          <strong>{props.menor} MB</strong>
          <p>Menor arquivo</p>
        </div>

        <div className="info-card">
          <strong>{props.visitas}</strong>
          <p>Visitas nesta pagina</p>
        </div>
      </div>
    </section>
  )
}

export default Estatisticas
