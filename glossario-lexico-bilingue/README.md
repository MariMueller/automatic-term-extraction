# Glossário Léxico Bilíngue (Militar)

Este projeto consiste em uma interface web moderna e intuitiva para um glossário bilíngue focado em terminologia militar (Português-Brasil / Inglês). Os dados do glossário foram processados e estruturados para serem consumidos dinamicamente na página.

## Funcionalidades

- **Pesquisa em Tempo Real**: Campo de busca que filtra os termos do glossário instantaneamente conforme o usuário digita, buscando tanto em português quanto em inglês.
- **Visualização Dinâmica**: Os dados (termos principais e suas variações) são carregados a partir de arquivos locais de dados (`data.js` / JSON) e renderizados na tela via JavaScript de forma ágil e otimizada.
- **Design Responsivo e Moderno**: Interface limpa e agradável desenvolvida com CSS, focada na legibilidade, usabilidade e na experiência do usuário final.

## Estrutura de Arquivos

- `index.html`: A estrutura principal e os elementos da página web.
- `styles.css`: As regras de estilização, design e layout da aplicação.
- `script.js`: O motor da aplicação, responsável pela lógica de busca, filtragem e a renderização dinâmica dos termos no HTML.
- `data.js`: Arquivos contendo os dados (termos, traduções e variações) extraídos do léxico original (planilha), estruturados para o consumo fácil do front-end.

## Como Executar

Por ser uma aplicação baseada inteiramente em HTML, CSS e JavaScript estático (Vanilla JS), não é necessário nenhum servidor complexo ou instalação de dependências para visualizá-la.

1. Navegue até a pasta `glossario-lexico-bilingue`.
2. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
3. Utilize a barra de pesquisa para explorar e localizar as terminologias militares!

