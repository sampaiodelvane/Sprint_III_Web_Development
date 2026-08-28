const Rodape = (props) => {
  return (
    <footer id="contato" className="footer">
      <div className="footer-column">
        <h3>Jovi V70</h3>
        <p>Experiencia aprimorada de armazenamento e filtragem.</p>
      </div>

      <div className="footer-column">
        <h3>Links uteis</h3>
        <ul>
          <li><a href="#armazenamento">Armazenamento</a></li>
          <li><a href="#filtros">Filtros</a></li>
          <li><a href="#galeria">Galeria</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Seu acesso</h3>
        <p>Hoje e {props.hoje}</p>
        <p>Ultimo acesso: {props.ultimoAcesso}</p>
        <p>Voce ja abriu esta pagina {props.visitas} vez(es)</p>
      </div>

      <p className="copyright">
        Equipe OptiCode | FIAP - Web Development | Sprint III
      </p>
    </footer>
  )
}

export default Rodape
