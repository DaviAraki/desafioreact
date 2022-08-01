# Para Rodar o App

Criar uma conta no Firebase e criar um projeto no Firebase.
Para criar o projeto vá em [Firebase](https://console.firebase.google.com), com sua conta Google e clique em adicionar projeto.
Em seguida, insira o nome do projeto.
Pode desativar o Analytics, não será usado nesse projeto.
Em seguida, clique em criar.

As váriveis vão estar em configurações do projeto. <br />
Visão Geral do projeto > Configurações do projeto No canto superior esquerdo.<br />
Vá em Seus Aplicativos e escolha a opção Web (</>).<br />
De um apelido e registre o app

Em seguida aparecerá suas variáveis,
EXEMPLO :

const firebaseConfig = {
apiKey: "AASFSFASDFSAD123123FSDFSADFasdasddaaSA",
authDomain: "asdasda-adb3f.firebaseapp.com",
projectId: "asdasda-adb3f",
storageBucket: "asdasda-adb3f.appspot.com",
messagingSenderId: "123456789456",
appId: "1:487897921116:web:c99dd64c53b785fa44c02d"
};

Caso perca pode recuperar no seguinte local:
Visão Geral do projeto > Configurações do projeto No canto superior esquerdo.<br />

Criar um arquivo .env.local na raiz do projeto. <br />

Pegar as variáveis de ambiente do projeto do Firebase e colocar no arquivo .env.local <br />

Adicionar no arquivo .env.local a seguinte variável: REACT_APP_TASKS_API=https://desafioreact.s3.amazonaws.com/menu/<br />  
Instalar a extensão[CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en) no seu navegador.<br />  
Em seguida usar o yarn install para instalar os módulos do projeto.<br />  
Para rodar o app, usar o yarn start.<br />  
Instalar a extensão do ESLINT no seu editor de texto. para seguir os padrões configurados <br />

## Escolhas

Escolhi usar a biblioteca Material UI, já que os componentes do layout são muito parecidos com os oferecidos pela biblioteca.

Escolhi usar o styled-components, pois é uma biblioteca de CSS in JS que costuma ter menos problemas de instalação do que o SASS e também para a utilização do tema dark e light.

Escolhi usar o i18n, pois é uma biblioteca que permite a tradução de textos em vários idiomas.

Escolhi usar o Firebase para fazer a autenticação com google por ser capaz de receber as iniciais e ter um login realista.

Escolhi usar o Redux para gerenciamento de estado, junto com o toolkit, para melhor legibilidade do código e acesso ao RTK query. Escolhi usar Redux ao invés da Context API, pois a Context costuma ter mais problemas com otimização de renderizações.(Apesar do atual projeto ser pequeno e a Context provavelmente seria suficiente.)

Como estava tendo problemas com o CORS da aws, instalei a extensão [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en) no Chrome.

## Problemas

Escolhi usar o Firebase ao invés de um MOCK de login de usuário, já que assim, ainda teriamos as Iniciais do usuário, sem ter que simular o estado de logado ou não nem fazer nenhum tipo de validação de backend.
Se houvesse tempo eu criaria outra branch e teria feito outra tela de login, para que o usuário pudesse fazer o login digitando nome e senha.
