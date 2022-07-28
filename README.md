# Para Rodar o App

Criar uma conta no Firebase e criar um projeto no Firebase.
Pegar as variáveis de ambiente do projeto do Firebase e colocar no arquivo .env
Em seguida usar o yarn install para obter instalar os módulos do projeto.
Para rodar o app, usar o yarn start.

## Escolhas

Escolhi usar a biblioteca Material UI, já que os componentes do layout são muito parecidos com os oferecidos pela biblioteca.

Escolhi usar o styled-components, pois é uma biblioteca de CSS in JS que costuma ter menos problemas de instalação do que o SASS e também para a utilização do tema dark e light.

Escolhi usar o i18n, pois é uma biblioteca que permite a tradução de textos em vários idiomas.

Escolhi usar o Firebase para fazer a autenticação com google por ser capaz de receber as iniciais e ter um login realista.

Escolhi usar o Redux para gerenciamento de estado, junto com o toolkit, para melhor legibilidade do código e acesso ao RTK query. Escolhi usar Redux ao invés da Context API, pois a Context costuma ter mais problemas com otimização de renderizações.(Apesar do atual projeto ser pequeno e a Context provavelmente seria suficiente.)

Escolhi usar o redux ao invés do localStorage para alterar o tema, para poder fazer uso da ferramenta, mesmo ciente que no local storage o tema se mantém após uma atualização da página.
