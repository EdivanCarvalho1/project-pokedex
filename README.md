# Pokédex

Um projeto de Pokédex simples que exibe uma lista de Pokémon utilizando a API pública do Pokémon. Este projeto utiliza HTML, CSS e JavaScript para criar uma interface interativa onde os usuários podem carregar mais Pokémon ao clicar em um botão "Load more".

## Funcionalidades

- **Exibição de Pokémon:** Lista de Pokémon com número, nome, tipo e foto.
- **Carregamento Dinâmico:** Carrega Pokémon em lotes e adiciona novos à lista conforme o usuário clica em "Load more".
- **Filtragem por Geração:** O projeto está configurado para exibir apenas Pokémon da primeira geração (Geração I).

## Tecnologias Utilizadas

- **HTML:** Estrutura básica da página.
- **CSS:** Estilização da página. Utiliza Normalize.css para consistência entre navegadores e fontes do Google.
- **JavaScript:** Manipulação de DOM e chamada da API do Pokémon.

## Estrutura do Projeto

- **`index.html`**: O arquivo HTML principal que contém a estrutura da página e inclui os arquivos CSS e JavaScript.
- **`assets/css/global.css`**: Estilos globais para o projeto.
- **`assets/css/pokedex.css`**: Estilos específicos para a página de Pokédex.
- **`assets/js/poke-model.js`**: Define a classe `Pokemon`.
- **`assets/js/poke-api.js`**: Funções para interagir com a API do Pokémon.
- **`assets/js/main.js`**: Lógica principal para carregar Pokémon e gerenciar a interação do usuário.

## Como Executar

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/EdivanCarvalho1/pokedex.git

2. **Navegue até o Diretório do Projeto:**
    ```bash
    cd Pokedex

3. **Abra o Arquivo index.html em um Navegador:**
- **`Você pode abrir o arquivo diretamente no seu navegador ou configurar um servidor local para servir o arquivo.

## Funcionalidade de Carregamento

- **`Carregamento Inicial:`** A lista de Pokémon é carregada com os primeiros 5 Pokémon da primeira geração.
- **`Carregar Mais:`** Ao clicar no botão "Load more", o projeto carrega mais Pokémon até o limite da primeira geração (151 Pokémon).

## Dependências

Normalize.css - CSS
Google Fonts - Roboto

## Contribuições

Sinta-se à vontade para contribuir para este projeto enviando um pull request ou criando uma issue.

## Licença

Este projeto está licenciado sob a MIT License.

