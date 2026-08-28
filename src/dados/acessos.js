// Modulo que guarda os dados do usuario no localStorage do navegador.

const hoje = new Date().toLocaleDateString('pt-BR')
const visitasGuardadas = localStorage.getItem('jovi_visitas')
const acessoGuardado = localStorage.getItem('jovi_ultimo_acesso')
const totalDeVisitas = Number(visitasGuardadas) + 1

let textoDoUltimoAcesso = 'este e o seu primeiro acesso'
if (acessoGuardado) {
  textoDoUltimoAcesso = acessoGuardado
}

localStorage.setItem('jovi_visitas', totalDeVisitas)
localStorage.setItem('jovi_ultimo_acesso', hoje)

export const visitas = totalDeVisitas
export const ultimoAcesso = textoDoUltimoAcesso
export const dataDeHoje = hoje
