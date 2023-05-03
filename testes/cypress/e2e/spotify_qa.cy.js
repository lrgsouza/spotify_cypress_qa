/// <reference types="cypress"/>

describe('Testes da UI spotify web', () => {
  it('Test Case: Carregar home page com sucesso', () => {
    cy.visit('https://open.spotify.com/')
    let languageSet = defineLanguage()
    cy.get('[data-testid="login-button"]').should('be.enabled')
  })

  it('Test case: Usabilidade da aba search com pesquisa valida',()=>{
    cy.visit('https://open.spotify.com/search')
    let languageSet = defineLanguage()
    cy.get('[data-testid="search-input"]').type('Link Park')
    cy.get('.VL6wjp4Br_D3FEWrUGGR').should('exist')
  })

  it('Test case: Usabilidade da aba search com pesquisa invalida',()=>{
    cy.visit('https://open.spotify.com/search')
    let languageSet = defineLanguage()
    cy.get('[data-testid="search-input"]').type('Lsa24v324f')
    cy.get('.zFOvsuNQpwehjH2VoiLL').should('exist')
  })

  it('Test case: login com user inexistente',()=>{
    cy.visit('https://open.spotify.com')
    let languageSet = defineLanguage()
    cy.get('[data-testid="login-button"]').click()
    cy.get('[data-testid="login-username"]').type('usertest@test.com')
    cy.get('[data-testid="login-password"]').type('passwordtest{enter}')
    cy.get('.Wrapper-sc-62m9tu-0').should('exist')
  })

  it('Test case: Testar ir para home clicando no logo',()=>{
    cy.visit('https://open.spotify.com/search')
    let languageSet = defineLanguage()
    cy.get('.liKqY2CEkAKTwX2SfNCu').click()
    cy.get('[data-testid="login-button"]').should('be.enabled')
  })

  it('Test case: Testar trocar idioma para portugues',()=>{
    cy.visit('https://open.spotify.com/search')
    let languageSet = defineLanguage()
    cy.get('[data-testid="language-selection-button"]').click()
    cy.get('[data-testid="language-option-pt-BR"]').click() 
    cy.get('.Button-sc-1dqy6lx-0').should('contain.text','Inscrever-se') 
  }) 

})

function defineLanguage(){
  cy.get('[data-testid="language-selection-button"]').click()
  cy.get('[data-testid="language-option-en"]').click()
  return true
}