import BotaoFiltro from './BotaoFiltro'

const Filtros = (props) => {
  return (
    <section id="filtros" className="filters">
      <h2>Controle de Filtro</h2>
      <p>Clique em um filtro para ver como ele deixa a sua foto.</p>

      <div className="filter-control">
        <input type="radio" name="filtro" id="filtro-normal" defaultChecked />
        <input type="radio" name="filtro" id="filtro-pb" />
        <input type="radio" name="filtro" id="filtro-vintage" />
        <input type="radio" name="filtro" id="filtro-noturno" />

        <div className="filter-buttons">
          <BotaoFiltro id="filtro-normal" classe="botao-filtro btn-normal" nome="Normal" />
          <BotaoFiltro id="filtro-pb" classe="botao-filtro btn-pb" nome="Preto e Branco" />
          <BotaoFiltro id="filtro-vintage" classe="botao-filtro btn-vintage" nome="Vintage" />
          <BotaoFiltro id="filtro-noturno" classe="botao-filtro btn-noturno" nome="Modo Noturno" />
        </div>

        <img className="filter-photo" src={props.imagem} alt="Foto com o filtro aplicado" />

        <p className="filter-text texto-normal">A foto do jeito que a camera capturou.</p>
        <p className="filter-text texto-pb">Tira as cores e destaca as sombras.</p>
        <p className="filter-text texto-vintage">Deixa a foto com um tom antigo.</p>
        <p className="filter-text texto-noturno">Escurece a imagem e reforca as cores.</p>
      </div>
    </section>
  )
}

export default Filtros
