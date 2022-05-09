function Sugestoes(){

    const sugestion1 ="https://thumbs.dreamstime.com/b/cavalo-engra%C3%A7ado-57284157.jpg"
    const sugestion2 ="https://i.pinimg.com/236x/76/80/95/7680957da55d657c64420eef0dd04a20.jpg"
    const sugestion3 ="https://cdn.dicionariopopular.com/imagens/grupo-mimimi.jpg"
    const sugestion4 ="https://i0.wp.com/techwek.com/wp-content/uploads/2021/03/gata-freira-para-perfil.jpg?resize=544%2C544&ssl=1"
    const sugestion5 ="https://i.pinimg.com/236x/31/50/32/315032da0e30d67dda71cac0465c8ce2.jpg"
    return (
        <div class="sugestoes">
            <div class="perfil-sugestao">
                <div class="foto-sugestao">
                    <img class="foto-sugestao" src={sugestion1} alt="" width="32px" height="32px"></img>
                </div>
                <div class="texto-sugestao">
                    <div class="nome-sugestao">Ô louco!</div>
                    <div class="status-sugestao">Novo no instagram</div>
                </div>
                <div class="botao-seguir">Seguir</div>
            </div>
            <div class="perfil-sugestao">
                <div class="foto-sugestao">
                    <img class="foto-sugestao" src={sugestion2} alt="" width="32px" height="32px"></img>
                </div>
                <div class="texto-sugestao">
                    <div class="nome-sugestao">Wood</div>
                    <div class="status-sugestao">Segue você</div>
                </div>
                <div class="botao-seguir">Seguir</div>
            </div>
            <div class="perfil-sugestao">
                <div class="foto-sugestao">
                    <img class="foto-sugestao" src={sugestion3} alt="" width="32px" height="32px"></img>
                </div>
                <div class="texto-sugestao">
                    <div class="nome-sugestao">Sweet tooth</div>
                    <div class="status-sugestao">Segue você</div>
                </div>
                <div class="botao-seguir">Seguir</div>
            </div>
            <div class="perfil-sugestao">
                <div class="foto-sugestao">
                    <img class="foto-sugestao" src={sugestion4} alt="" width="32px" height="32px"></img>
                </div>
                <div class="texto-sugestao">
                    <div class="nome-sugestao">Holy Cat!</div>
                    <div class="status-sugestao">Segue você</div>
                </div>
                <div class="botao-seguir">Seguir</div>
            </div>
            <div class="perfil-sugestao">
                <div class="foto-sugestao">
                    <img class="foto-sugestao" src={sugestion5} alt="" width="32px" height="32px"></img>
                </div>
                <div class="texto-sugestao">
                    <div class="nome-sugestao">Coach for dogs</div>
                    <div class="status-sugestao">Novo no instagram</div>
                </div>
                <div class="botao-seguir">Seguir</div>
            </div>
        </div>

    )
}

export default Sugestoes;