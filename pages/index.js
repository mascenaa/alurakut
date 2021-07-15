import React from 'react';
import MainGrid from '../src/components/MainGrid/index'
import Box from '../src/components/Box/index'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault ,OrkutNostalgicIconSet,  AlurakutLoginScreen} from '../src/lib/AlurakutCommuns'
import {ProfileRelationsBoxWrapper} from '../src/components/profileRelations/index'

  


  //const comunidades = comunidades[0];
  //const alterador = comunidades[1];
  //const comunidades = ['Alurakut Devs',]


  // Gerador de Identificador 
  function geradorRandom (numeroRandom) {
    return Math.random() * (10000000000-100) + 1;
   
  }

  // ConfigProfile 
function ProfileSidebar (props){
  return (
    <Box>
    <img src= {`https://github.com/${props.githubAvatar}.png`} style = {{borderRadius: '8px'}} />
    <hr/>

    <p>
    <a className = "boxLink" href ={`https://github.com/${props.githubUser}`}>
     @{props.githubAvatar}
    </a>
    </p>
    <Box className = "smallTitle">
       <p>
         16y, dev
       </p>
     </Box>
    <hr/>

    <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}


const numero = geradorRandom();
console.log(numero);

export default function Home() {
  // UserDefault
  const githubUser = 'patrooooo'
  // SettingCommunitys
  const [comunidades, setComunidades] = React.useState([{
    id: numero, 
    title: 'Eu odeio acordar cedo',
    image: 'data:image/jpeg;base64,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'

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

  // API get friends/followers 
  const seguidores = fetch('https://api.github.com/users/juunegreiros/followers')
        .then(function (respostaServidor) {
          return respostaServidor.json();
        })
        .then(function (respostaCompleta) {
          console.log(respostaCompleta);
        })
        .catch( () => { 


        });


  return (
  <>
    <AlurakutMenu/>
    <MainGrid>
    <div>
      <Box className="profileArea" style = {{ gridArea: 'profileArea' }}>
      <ProfileSidebar githubAvatar={githubUser}/>
      </Box>
    </div>

    <div>
      <Box className="welcomeArea" style = {{ gridArea: 'welcomeArea' }}>
        <h1 className="title">
          Feed de novidades
          </h1>
        <OrkutNostalgicIconSet/>
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
      <Box className="profileRelacionsArea" style = {{ gridArea: 'profileRelacionsArea' }}>
    <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          👥 ․ Comunidades ({comunidades.length})
        </h2>
            <ul>
            {comunidades.map((itemAtual) => {
                return(
                <li id={itemAtual.id}>
                <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                < img src={itemAtual.image}/>
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
            return(
            <li key={itemAtual.id}>
            <a href={`/users/${`itemAtual`}`}>
            <img src={`https://github.com/${itemAtual}.png`}/>
            <span>{itemAtual}</span>
            </a>
            </li>
            )
          })}
          </ul>
      </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <Box>
            <h2 className ="smallTitle">
             😎 ․ Amigos
            </h2>


            </Box>
          </ProfileRelationsBoxWrapper>
        </Box>
      </div>
    </MainGrid>
  </>
  )
}


