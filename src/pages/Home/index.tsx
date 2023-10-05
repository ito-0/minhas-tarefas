import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarrasLateral'
import ListaDeConstatos from '../../containers/ListaDeContato'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeConstatos />
    <BotaoAdicionar />
  </>
)

export default Home
