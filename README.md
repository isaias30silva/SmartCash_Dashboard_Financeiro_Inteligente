# 💰 SmartCash — Dashboard Financeiro Inteligente

O SmartCash é uma aplicação web de controle financeiro pessoal desenvolvida com **HTML5, CSS3 e JavaScript Vanilla**, criada como parte do programa TrendsIT 2026, uma realização do Núcleo Softex Campinas e coordenação do Softex Nacional.

O projeto simula uma aplicação real de mercado voltada para gestão financeira pessoal, permitindo registrar receitas e despesas, calcular saldo automaticamente, visualizar histórico de transações e persistir dados localmente utilizando LocalStorage.

O principal objetivo deste projeto foi consolidar fundamentos essenciais de desenvolvimento front-end moderno, com foco em:

- lógica de programação;
- manipulação de DOM;
- gerenciamento de estado;
- persistência de dados;
- arquitetura de código;
- experiência do usuário.

---

## 🌐 Acesse o projeto

🔗 https://isaias30silva.github.io/SmartCash_Dashboard_Financeiro_Inteligente/

---

## 📁 Repositório

🔗 https://github.com/isaias30silva/SmartCash_Dashboard_Financeiro_Inteligente

---

## 🎯 Objetivo do Projeto

Desenvolver uma SPA (Single Page Application) financeira capaz de:

- Registrar receitas e despesas
- Atualizar saldo em tempo real
- Exibir resumo financeiro dinâmico
- Persistir dados entre sessões
- Permitir exclusão de transações
- Validar entradas do usuário
- Funcionar sem recarregar a página
- Oferecer experiência fluida e responsiva

Além disso, o projeto teve como foco principal o aprofundamento em JavaScript Vanilla, sem utilização de frameworks ou bibliotecas externas.

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- LocalStorage API
- Git & GitHub
- GitHub Pages

---

## 🛠️ Ferramentas de Desenvolvimento

- Visual Studio Code (VS Code)
- DevTools do navegador
- Console JavaScript
- Aba Application (LocalStorage)
- Lighthouse
- GitHub Desktop / Git CLI

---

## 📱 Funcionalidades

### ✅ Gestão Financeira

- Cadastro de receitas
- Cadastro de despesas
- Atualização automática do saldo
- Cálculo dinâmico de entradas e saídas
- Exclusão individual de transações

### ✅ Persistência de Dados

- Salvamento automático com LocalStorage
- Recuperação automática ao abrir a aplicação
- Persistência após refresh ou fechamento do navegador

### ✅ Experiência do Usuário

- Dashboard financeiro corporativo
- Interface responsiva
- Feedback visual para erros e sucesso
- Distinção visual entre receitas e despesas
- Animações suaves
- Atualização instantânea sem reload

---

## 📐 Conceitos Aplicados

Durante o desenvolvimento do SmartCash foram aplicados conceitos fundamentais e intermediários de front-end moderno, incluindo:

### HTML5

- Estrutura semântica
- Acessibilidade básica
- Organização hierárquica do conteúdo

### CSS3

- Responsividade com Media Queries
- Flexbox
- CSS Grid
- Variáveis CSS (`:root`)
- Animações e transições
- Design System simples
- Mobile First

### JavaScript

- Manipulação de DOM
- Captura e gerenciamento de eventos
- Arrays e objetos
- Métodos de array:
  - `.filter()`
  - `.reduce()`
  - `.forEach()`
- CRUD básico
- Gerenciamento de estado
- Renderização dinâmica
- Funções puras
- Clean Code
- Separação de responsabilidades

### Persistência

- Web Storage API
- `localStorage`
- `JSON.stringify()`
- `JSON.parse()`

---

## 📊 Performance (Lighthouse)

Resultado da auditoria utilizando o Lighthouse:

- ⚡ Performance: 56
- ♿ Acessibilidade: 95
- ✅ Boas práticas: 96
- 🔍 SEO: 100

---

## 🧠 Estrutura de Dados

As transações são armazenadas em um array de objetos no seguinte formato:

```javascript
{
  id: 17123456789,
  name: "Salário",
  amount: 3500
}
```

---

## 🔄 Fluxo da Aplicação

```text
Usuário envia formulário
        ↓
Validação dos dados
        ↓
Criação da transação
        ↓
Atualização do estado
        ↓
Persistência no LocalStorage
        ↓
Renderização da interface
        ↓
Atualização dos cards financeiros
```

---

## 🏗️ Estrutura do Projeto

```bash
smartcash/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    └── images/
```

---

## 📊 Funcionalidades Técnicas

### CRUD Implementado

| Operação | Status |
| -------- | ------ |
| Create   | ✅     |
| Read     | ✅     |
| Update   | ❌     |
| Delete   | ✅     |

---

## 🧪 Validações Implementadas

- Campos obrigatórios
- Bloqueio de valores inválidos
- Conversão de string para number
- Prevenção de `NaN`
- Bloqueio de valor zero
- Feedback visual de erro

---

## 📱 Responsividade

O projeto foi desenvolvido com foco em responsividade, garantindo funcionamento adequado em:

- Desktop
- Tablets
- Smartphones

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foi possível aprofundar conhecimentos em:

- Lógica de programação
- Manipulação avançada de DOM
- Gerenciamento de estado em aplicações
- Persistência de dados no navegador
- Estruturação de aplicações SPA
- Métodos de array em JavaScript
- Organização de código
- Clean Code
- Responsividade
- Debugging com DevTools
- Fluxo de dados em aplicações front-end

---

## 📌 Requisitos Atendidos

✔ Cadastro de transações  
✔ Atualização dinâmica de saldo  
✔ Cálculo automático de entradas e saídas  
✔ Exclusão de transações  
✔ Persistência com LocalStorage  
✔ Responsividade  
✔ JavaScript Vanilla  
✔ Manipulação de DOM  
✔ SPA sem reload  
✔ Estrutura organizada em arquivos separados  
✔ Validações de formulário  
✔ Interface corporativa moderna

---

## 📈 Performance e Qualidade

O projeto foi desenvolvido priorizando:

- organização de código;
- legibilidade;
- separação de responsabilidades;
- experiência do usuário;
- atualização eficiente da interface;
- boas práticas de JavaScript Vanilla.

---

## 👀 Preview

![Preview da aplicação](./assets/images/preview.png)

---

## 👨‍💻 Autor

**Isaias Silva**

Estudante do curso de Engenharia de Computação e participante do programa de formação TrendsIT 2026.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do programa TrendsIT 2026, uma realização do Núcleo Softex Campinas e coordenação do Softex Nacional.
