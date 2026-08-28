const Armazenamento = (props) => {
  return (
    <section id="armazenamento" className="storage">
      <h2>Pre-visualizacao do armazenamento</h2>
      <p>Veja suas fotos e videos com mais clareza e organizacao.</p>

      <div className="storage-content">
        <img
          className="storage-image"
          src={props.imagem}
          alt="Tela de armazenamento da Jovi V70"
        />

        <div className="storage-box">
          <div className="storage-line">
            <span>{props.usado} GB de {props.total} GB usado</span>
            <span>{props.porcentagem}%</span>
          </div>

          <div className="bar">
            <div className="bar-fill" style={{ width: props.porcentagem + '%' }}></div>
          </div>

          <div className="storage-numbers">
            <div className="info-card">
              <strong>{props.fotos}</strong>
              <p>Fotos</p>
            </div>

            <div className="info-card">
              <strong>{props.livre} GB</strong>
              <p>Livre</p>
            </div>

            <div className="info-card">
              <strong>{props.economizado} GB</strong>
              <p>Economizado pela IA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Armazenamento
