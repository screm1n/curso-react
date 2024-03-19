import { useState } from 'react'

function Form() {
    
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`O usuário ${name} foi cadastrado com a senha: ${password}.`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name"></label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite seu nome aqui" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form