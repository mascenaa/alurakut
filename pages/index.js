import MainGrid from '../src/components/MainGrid/index'
import Box from '../src/components/Box/index'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommuns'
import {ProfileRelationsBoxWrapper} from '../src/components/profileRelations/index'




function ProfileSidebar (props){
  return (
    <img src= {`https://github.com/${props.githubAvatar}.png`} style = {{borderRadius: '8px'}} />

  )
}

export default function Home() {
  const githubUser = 'patrooooo'
  const pessoasFav = [
  'juunegreiros', 
  'omariosouto', 
  'peas',
  'rafaballerini', 
  'marcobrunodev',
  'felipefialho'
]

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
        <h1>Feed</h1>

        <OrkutNostalgicIconSet/>
      </Box>
    </div>
    <div>
      <Box className="profileRelacionsArea" style = {{ gridArea: 'profileRelacionsArea' }}>
      <ProfileRelationsBoxWrapper>
       <h2 className="smallTitle">
         Pessoas Favoritas ({pessoasFav.length})
       </h2>
      <ul>
       {pessoasFav.map((itemAtual) => {
          return(
          <li>
          <a href={`/users/${`itemAtual`}`} key={itemAtual}>
          <img src={`https://github.com/${itemAtual}.png`}/>
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

