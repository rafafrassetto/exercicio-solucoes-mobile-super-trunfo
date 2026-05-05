# Centro Universitário SATC
## Engenharia de Software - Disciplina de Soluções Mobile

### Exercício: Super Trunfo Fórmula 1

Este repositório contém a implementação de uma aplicação mobile desenvolvida com **React Native**, com o objetivo de consolidar conceitos fundamentais de componentes básicos, estilização via `StyleSheet` e manipulação de dados estáticos em JavaScript.

---

#### 📋 Descrição do Projeto

O projeto consiste em uma interface de exibição de cartas colecionáveis de pilotos históricos da Fórmula 1, inspirada no jogo **Super Trunfo**. A aplicação foi projetada para apresentar informações técnicas e biográficas de forma clara e visualmente atrativa, utilizando uma arquitetura simplificada voltada para o aprendizado acadêmico.

#### 🎯 Objetivos de Aprendizagem

- Construção de layouts responsivos utilizando `View`, `Text` e `Image`.
- Implementação de rolagem de conteúdo com `ScrollView`.
- Gerenciamento de estilos centralizados através de `StyleSheet.create()`.
- Integração de dados estáticos provenientes de módulos externos (`pilots.js`).

#### 🛠️ Tecnologias e Requisitos

- **Ambiente de Desenvolvimento**: React Native / Expo.
- **Linguagem**: JavaScript (ES6+).
- **Componentes Core**:
    - `View`: Estruturação do layout e containers.
    - `Text`: Renderização de strings e informações.
    - `Image`: Exibição de imagens remotas (via URI).
    - `ScrollView`: Suporte para navegação vertical em telas menores.
- **Estilização**: Sistema de estilos baseado em CSS-in-JS.

#### 🗂️ Estrutura de Arquivos

```text
src/
├── App.js           # Ponto de entrada e renderização da interface
└── data/
    └── pilots.js    # Dataset contendo os objetos de dados dos pilotos
```

#### 🚀 Instruções para Execução

1. **Pré-requisitos**: Possuir o Node.js e o Expo CLI instalados globalmente.
2. **Instalação**: Execute o comando abaixo para instalar as dependências necessárias:
   ```bash
   npm install
   ```
3. **Inicialização**: Para iniciar o servidor de desenvolvimento do Expo:
   ```bash
   npx expo start
   ```
4. **Visualização**: Utilize o aplicativo **Expo Go** em um dispositivo físico ou um emulador Android/iOS.

---

**Professor Orientador:** Thyerri Mezzari  
**Acadêmico:** rafafrassetto  
**Data:** Maio de 2026
