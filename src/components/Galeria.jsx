import CardFoto from './CardFoto'

import ceupordosol from '../assets/imagens/ceupordosol.jpg'
import trilha from '../assets/imagens/trilha.jpg'
import campo from '../assets/imagens/campo.jpg'
import fotosol from '../assets/imagens/fotosol.jpg'
import paisagemDia from '../assets/imagens/paisagem-dia.png'
import paisagemNoite from '../assets/imagens/paisagem-noite.png'

const Galeria = () => {
  return (
    <section id="galeria" className="gallery">
      <h2>Central de conteudo</h2>
      <p>Tudo o que foi capturado pelo seu aparelho Jovi V70 em um so lugar.</p>

      <div className="photo-list">
        <CardFoto
          imagem={ceupordosol}
          nome="Ceu no por do sol"
          categoria="Paisagem"
          tamanho="8.4"
          data="27/08/2026"
        />

        <CardFoto
          imagem={trilha}
          nome="Trilha da montanha"
          categoria="Aventura"
          tamanho="5.1"
          data="25/08/2026"
        />

        <CardFoto
          imagem={campo}
          nome="Campo ao amanhecer"
          categoria="Paisagem"
          tamanho="6.7"
          data="21/08/2026"
        />

        <CardFoto
          imagem={fotosol}
          nome="Por do sol no pier"
          categoria="Retrato"
          tamanho="4.8"
          data="18/08/2026"
        />

        <CardFoto
          imagem={paisagemNoite}
          nome="Estrada da costa a noite"
          categoria="Noturna"
          tamanho="6.2"
          data="11/08/2026"
        />

        <CardFoto
          imagem={paisagemDia}
          nome="Rio entre os vales"
          categoria="Paisagem"
          tamanho="1.2"
          data="03/08/2026"
        />
      </div>
    </section>
  )
}

export default Galeria
