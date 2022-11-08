import './style.css'

const lista = ['CATEGORIA' , 'MINHA ESTANTE' , 'FAVORITOS']

function Lista() {

    return (

        <ul className='opcoes'>
        {lista.map( (texto) => (
             <li className='opcao'><p>{texto}</p></li>
        ))}
      </ul>

    )


}

export default Lista