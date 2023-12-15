
<div align="center">

  ## ChatBot + ChatGPT 💬

</div>

## 🤖 Sobre
Este projeto consiste na criação de um chatBot integrado a API do chatGPT. O chatbot foi desenvolvido na linguagem de programação javascript. A integração do chatbot com a API do chatgpt permite que ele tenha capacidades avançadas de processamento de linguagem natural, possibilitando uma interação mais natural e inteligente com os usuários. A interface gráfica do chatbot foi desenvolvida utilizando HTML e CSS.

## ⚙️ Instruções de Uso
Para executar este projeto, você precisará clonar este repositório.
```sh
  # Clone este repositório
  git clone https://github.com/marianasciment0/ChatBot-ChatGPT
```
Adicionar a sua API no código javascript.
```sh
  # Substitua o trecho CHAVE-API pela sua API do chat GPT
  const apiKey = "CHAVE-API"
```
Você pode restringir o chat para que ele identifique palavras nas frases e, assim, possa responder apenas às perguntas que contenham essas palavras.

```sh
  # Substitua as palavras para as que você deseja identificar
 const programmingKeywords = ['programa', 'código', 'desenvolvimento', 'javascript', 'python', 'java', 'html', 'css', 'algoritmo', 'lógica'];
```
Você também pode personalizar a mensagem informada ao usuário caso nenhuma das palavras selecionadas seja identificada.
```sh
 showHistoric(message.value, "Infelizmente não sei conversar sobre isso. Mas eu posso te ajudar com assuntos relacionados a programação");
```
## 💬 Tecnologias utilizadas 
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

