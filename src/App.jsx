import './App.css'

import campo from './assets/imagens/campo.jpg'
import armazenamento from './assets/imagens/armazenamento.png'

import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Login from './components/Login'
import Armazenamento from './components/Armazenamento'
import Filtros from './components/Filtros'
import Galeria from './components/Galeria'
import FotoDoDia from './components/FotoDoDia'
import Estatisticas from './components/Estatisticas'
import Rodape from './components/Rodape'

import {
  quantidadeDeFotos,
  espacoTotalGb,
  espacoUsadoGb,
  espacoLivreGb,
  espacoDasFotosMb,
  espacoEconomizadoGb,
  porcentagemUsada,
  mediaPorFoto,
  maiorArquivoMb,
  menorArquivoMb,
  fotoDoDiaImagem,
  fotoDoDiaNome,
} from './dados/calculos'

import { visitas, ultimoAcesso, dataDeHoje } from './dados/acessos'

const App = () => {
  return (
    <div className="app">
      <Cabecalho />

      <Hero
        titulo="Jovi V70"
        texto="Experiencia aprimorada de armazenamento e filtragem. A camera organiza,
        comprime e mostra as suas fotos com mais clareza."
      />

      <Login usuario="opticode" senha="1234" />

      <div className="conteudo">
        <Armazenamento
          imagem={armazenamento}
          total={espacoTotalGb}
          usado={espacoUsadoGb}
          livre={espacoLivreGb}
          porcentagem={porcentagemUsada}
          fotos={quantidadeDeFotos}
          economizado={espacoEconomizadoGb}
        />

        <Filtros imagem={campo} />

        <Galeria />

        <FotoDoDia
          imagem={fotoDoDiaImagem}
          nome={fotoDoDiaNome}
        />

        <Estatisticas
          fotos={quantidadeDeFotos}
          espacoDasFotos={espacoDasFotosMb}
          media={mediaPorFoto}
          maior={maiorArquivoMb}
          menor={menorArquivoMb}
          visitas={visitas}
        />
      </div>

      <Rodape
        hoje={dataDeHoje}
        ultimoAcesso={ultimoAcesso}
        visitas={visitas}
      />
    </div>
  )
}

export default App
