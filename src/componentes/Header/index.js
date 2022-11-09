import Logo from '../Logo'
import Lista from '../OpcaoLista'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
        background-color: #FFF;
        display: flex;
        justify-content: center;
`

function Header() {
        return (
                <HeaderContainer>
                        <Logo/>
                        <Lista/>
                        <IconesHeader/>
                </HeaderContainer>
            )
}

export default Header