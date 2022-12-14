import logo from '../../img/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`

    display: flex;
    font-size: 30px;
}

    margin-right: 10px;
}

`

function Logo () {
    return (

       <LogoContainer>
                <img src={logo} className='logo-img'></img>
                <p> <strong>Alura</strong>Books</p>
        </LogoContainer>

    )

}

export default Logo