import * as S from './styles'

const ListaDeContatos = () => (
  <main>
    <S.Titulo>Lista de Contatos</S.Titulo>
    <S.Formulario>
      <S.Inputs type="text" placeholder="Nome completo" />
      <S.Inputs type="email" placeholder="E-mail" />
      <S.Inputs type="tel" placeholder="Telefone" />
    </S.Formulario>
    <S.Botao type="button">Adicionar</S.Botao>
  </main>
)

export default ListaDeContatos
