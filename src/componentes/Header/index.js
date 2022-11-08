import Logo from '../../componentes/Logo'
import Lista from '../../componentes/OpcaoLista';
import Icones from '../../componentes/OpcaoLogo';
import './style.css'

function Header () {
    return (
        <header className="App-header">
        <Logo />
        <Lista />
        <Icones/>
      </header>
    )

}

export default Header