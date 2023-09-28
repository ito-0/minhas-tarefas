import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarrasLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefa'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
