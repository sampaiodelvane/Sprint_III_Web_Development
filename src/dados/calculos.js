// Modulo com os numeros da galeria

import campo from '../assets/imagens/campo.jpg'
import trilha from '../assets/imagens/trilha.jpg'
import fotosol from '../assets/imagens/fotosol.jpg'

const tamanhos = [8.4, 5.1, 6.7, 4.8, 6.2, 1.2]

let soma = 0
for (let i = 0; i < tamanhos.length; i = i + 1) {
  soma = soma + tamanhos[i]
}

let maior = tamanhos[0]
let menor = tamanhos[0]
for (let i = 0; i < tamanhos.length; i = i + 1) {
  maior = Math.max(maior, tamanhos[i])
  menor = Math.min(menor, tamanhos[i])
}

const total = 15
const sistema = 4.2


const fotosGb = Math.round((soma / 1024) * 100) / 100
const usadoGb = Math.round((sistema + fotosGb) * 100) / 100


const fotosSorteaveis = [trilha, campo, fotosol]
const nomesSorteaveis = ['Trilha da montanha', 'Campo ao amanhecer', 'Por do sol no pier']
const posicao = Math.floor(Math.random() * fotosSorteaveis.length)

export const quantidadeDeFotos = tamanhos.length
export const espacoTotalGb = total
export const espacoUsadoGb = usadoGb
export const espacoDasFotosMb = Math.round(soma * 10) / 10
export const espacoLivreGb = Math.round((total - usadoGb) * 100) / 100
export const porcentagemUsada = Math.round((usadoGb / total) * 100)
export const mediaPorFoto = Math.round((soma / tamanhos.length) * 10) / 10
export const espacoEconomizadoGb = Math.ceil((soma * 0.4) / 1024 * 10) / 10

export const maiorArquivoMb = maior
export const menorArquivoMb = menor

export const fotoDoDiaImagem = fotosSorteaveis[posicao]
export const fotoDoDiaNome = nomesSorteaveis[posicao]
