# spotify_cypress_qa

## Repositório para desenvolvimento de testes da UI do spotify utilizando o framework cypress js.
#
### CASOS DE TESTES

- Carregar home page com sucesso
- Usabilidade da aba search com pesquisa valida
- Usabilidade da aba search com pesquisa invalida (falha)
- Login com user inexistente (falha)
- Testar ir para home clicando no logo
- Testar trocar idioma para portugues
#
## Para rodar o projeto

``` 
npm install cypress --save-dev
npm run start:cypress
```

Os testes estão contidos no arquivo e2e "spotify_qa.cy.js"

## Para rodar e gerar os relatórios
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```
#
## OBS: Para todo teste é configurada a linguagem Inglês para manter o padrão em todos os computadores. Também serve de validação para configuração de idioma padrão.
