import React from 'react';
import MainGrid from '../src/components/MainGrid/index'
import Box from '../src/components/Box/index'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet, AlurakutLoginScreen } from '../src/lib/AlurakutCommuns'
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelations/index'

//const comunidades = comunidades[0];
//const alterador = comunidades[1];
//const comunidades = ['Alurakut Devs',]


// Gerador de Identificador 
function geradorRandom(numeroRandom) {
  return Math.random() * (10000000000 - 100) + 1;

}

const numero = geradorRandom();
console.log(numero);

// ----------------------------------------------------------

// ConfigProfile 
function ProfileSidebar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubAvatar}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubAvatar}
        </a>
      </p>
      <Box className="smallTitle">
        <p>
          16y, dev
        </p>
      </Box>
      <hr />
      <Box className="smallTitle">
        <p>
          Número de Seguidores: 3041
        </p>
      </Box>

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}
// ----------------------------------------------------------

// ProfileBox = ProfileRelationsBoxWrapper/2
function ProfileRelationsBox(props2) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {props2.title} ({props2.items.length})
      </h2>
      <ul>
        {/* {seguidores.map((itemAtual) => {
            return(
            <li id={itemAtual.id}>
            <a href={`https://github.com/${itemAtual}.png`}>
            < img src={itemAtual.image}/>
            <span>{itemAtual.title}</span>
            </a>
            </li>
            )
          })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
};

// ----------------------------------------------------------


export default function Home() {
  // UserDefault
  const githubUser = 'patrooooo'
  // SettingC
  const [comunidades, setComunidades] = React.useState([{
    id: numero,
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'

  }]);
  // FavPersons ;)
  const pessoasFav = [
    'juunegreiros',
    'omariosouto',
    'Al0nnso',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]
  // ----------------------------------------------------------

  // API get friends/followers

  const [seguidores, setSeguidores] = React.useState([]);

  React.useEffect(function () {
    fetch('https://api.github.com/users/juunegreiros/followers')
      .then(function (respostaServidor) {
        return respostaServidor.json();
      })
      .then(function (respostaCompleta) {
        setSeguidores(respostaCompleta);
      })

    // API post/get GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
    })
  }, [])

  // ----------------------------------------------------------

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div>
          <Box className="profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSidebar githubAvatar={githubUser} />
          </Box>
        </div>

        <div>
          <Box className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
            <h1 className="title">
              Feed de novidades
            </h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle"> O que você deseja fazer? </h2>
            <form onSubmit={
              function captureCommunity(e) {
                e.preventDefault();

                const dadosdoForm = new FormData(e.target);

                const comunidade = {
                  titulo: dadosdoForm.get('title'),
                  image: dadosdoForm.get('image'),
                }
                const comunidadesAtuais = [...comunidades, comunidade];
                setComunidades(comunidadesAtuais);

              }
            } >
              <div>
                <input className="input"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  autocomplete="off"
                  arial-label="Qual vai ser? ;)"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Insira a URL da capa de sua comunidade"
                  name="image"
                  autocomplete="off"
                  arial-label="Qual vai ser? ;)"
                />
              </div>
              <button className="button">
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div>
          <Box className="profileRelacionsArea" style={{ gridArea: 'profileRelacionsArea' }}>
            <Box>
              <ProfileRelationsBox title="😬 ․ Seguidores" items={seguidores} />
            </Box>
            <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                👥 ․ Comunidades ({comunidades.length})
              </h2>
              <ul>
                {comunidades.map((itemAtual) => {
                  return (
                    <li id={itemAtual.id}>
                      <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                        < img src={itemAtual.image} />
                        <span>{itemAtual.title}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </ProfileRelationsBoxWrapper>
            <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                ⭐ ․ Pessoas Favoritas ({pessoasFav.length})
              </h2>
              <ul>
                {pessoasFav.map((itemAtual) => {
                  return (
                    <li key={itemAtual.id}>
                      <a href={`/users/${`itemAtual`}`}>
                        <img src={`https://github.com/${itemAtual}.png`} />
                        <span>{itemAtual}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </ProfileRelationsBoxWrapper>

          </Box>
        </div>
      </MainGrid>
    </>
  )
}


