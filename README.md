# Para Rodar o App

Criar uma conta no Firebase e criar um projeto no Firebase.
Pegar as variáveis de ambiente do projeto do Firebase e colocar no arquivo .env
Adicionar no arquivo .env a seguinte variável: REACT_APP_TASKS_API=https://desafioreact.s3.amazonaws.com/menu/
Instalar a extensão[CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en) no seu navegador.
Em seguida usar o yarn install para obter instalar os módulos do projeto.
Para rodar o app, usar o yarn start.

Instalar a extensão do ESLINT no seu editor de texto.

## Escolhas

Escolhi usar a biblioteca Material UI, já que os componentes do layout são muito parecidos com os oferecidos pela biblioteca.

Escolhi usar o styled-components, pois é uma biblioteca de CSS in JS que costuma ter menos problemas de instalação do que o SASS e também para a utilização do tema dark e light.

Escolhi usar o i18n, pois é uma biblioteca que permite a tradução de textos em vários idiomas.

Escolhi usar o Firebase para fazer a autenticação com google por ser capaz de receber as iniciais e ter um login realista.

Escolhi usar o Redux para gerenciamento de estado, junto com o toolkit, para melhor legibilidade do código e acesso ao RTK query. Escolhi usar Redux ao invés da Context API, pois a Context costuma ter mais problemas com otimização de renderizações.(Apesar do atual projeto ser pequeno e a Context provavelmente seria suficiente.)

Como estava tendo problemas com o CORS da aws, instalei a extensão [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en) no Chrome.
