function Perfil(){
    const foto="https://cdn.dicionariopopular.com/imagens/ariana-grande-imagem-perfil.jpg?auto_optimize=low"
    return(
        <div class="perfil">
            <div class="foto-usuario">
                <img class="foto-perfil-story" src={foto} width="56px" height="56px" alt=""></img>
            </div>
            <div class="nome-usuario">
                <div class="usuario">
                    Roberta Dolabella
                </div>
                <div class="nickname">
                    Beta
                </div>
            </div>
        </div>
    )
}
export default Perfil;