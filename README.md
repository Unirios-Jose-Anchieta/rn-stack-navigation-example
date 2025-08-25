# Crie um app com React Native + Expo que seja capaz de navegar entre uma tela para outra.

## Criando e configurando o projeto:

*Lembre-se, para criar o projeto utilizando as máquinas da universidade, você deve:*

1. Acessar o disco D pelo Git Bash através do comando `cd d:` ou similar para outro terminal.

2. Executar o comando de criação do projeto.

```shell
npx create-expo-app@latest navegacao --template blank
```

3. Após criar o projeto, acesse a pasta e execute o projeto:

```shell
cd navegacao
```

4. Dentro da pasta do projeto, abra o VSCode com o comando:

```shell
code .
```

5. Crie um arquivo na raíz do projeto chamado .ENV com o seguinte conteúdo:

```
NODE_TLS_REJECT_UNAUTHORIZED=0
```

6. Utilizando o terminal integrado do VSCode, execute o projeto com o comando:

```shell
npx expo start
```

7. Copie a URL que aparece abaixo do QR Code, abra o Simulador BlueStacks, vá até o aplicativo Expo Go e cole a URL.

8. Instale uma biblioteca de navegação do React Native, para este exemplo, vamos utilizar as bibliotecas:

- @react-navigation/native
- @react-navigation/native-stack
- react-native-screens
- react-native-safe-area-context

Para instalar as bibliotecas, execute o seguinte no terminal:

```shell
npx expo install @react-navigation/native @react-navigation/native-stack
```

e depois:

```shell
npx expo install react-native-screens react-native-safe-area-context
```

9. Agora, utilizando as documentações das bibliotecas ou qualquer fonte de pesquisa, descubra como criar duas telas e criar uma navegação Stack entre elas.

Exemplo: Tela 1 contém um botão que dá acesso a Tela 2 e vice-versa.

10. Para a entrega, envie um arquivo PDF contendo:

1 - Uma descrição rápida sobre como foi o seu processo de criação das duas telas e como adaptou a biblioteca de navegação.
2 - Prints das duas telas.
3 - Link para um repositório github onde o seu projeto foi hospedado.
