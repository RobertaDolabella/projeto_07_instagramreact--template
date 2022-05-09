import React from 'react';

function Feed(){

// logica

let listaLike=["descurtido","descurtido","descurtido","descurtido"]
let listaCoracao =["descurtidoCoracao","descurtidoCoracao","descurtidoCoracao","descurtidoCoracao"]

let Like0 = listaLike[0]
let Coracao0=listaCoracao[0]
let Like1 = listaLike[1]
let Coracao1=listaCoracao[1]
let Like2 = listaLike[2]
let Coracao2=listaCoracao[2]
let Like3 = listaLike[3]
let Coracao3=listaCoracao[3]
function changeStyle(numero){
   if(listaLike[numero]=="descurtido"){
       listaLike[numero]="curtido"
       listaCoracao[numero]="curtidoCoracao"
       console.log(listaLike)
   }
   else{
    listaLike[numero]="descurtido"
    listaCoracao[numero]="descurtidoCoracao"
    console.log(listaLike)
   }
   let Like0 = listaLike[0]
   let Coracao0=listaCoracao[0]
   let Like1 = listaLike[1]
   let Coracao1=listaCoracao[1]
   let Like2 = listaLike[2]
   let Coracao2=listaCoracao[2]
   let Like3 = listaLike[3]
   let Coracao3=listaCoracao[3]
   console.log(Like0)

}
    const publicacao1 = "https://i0.wp.com/techwek.com/wp-content/uploads/2021/02/melhores-memes-engracados.jpg?resize=564%2C634&ssl=1"
    const publicacao2 = "https://1.bp.blogspot.com/-SY6PSvONNJA/XKNmBBR6TTI/AAAAAAAAXB8/XY0_Dvb5OQMo-OcBTg9fB6ghEmiMWjq2QCLcBGAs/s640/Memes%2Bengra%25C3%25A7ados%2B%25281%2529.jpg"
    const publicacao3 = "https://static.imgs.app/content/assetz/uploads/2017/10/os-melhores-memes-engracados-suricate-seboso-07.jpg"
    const publicacao4 = "https://akns-images.eonline.com/eol_images/Entire_Site/20141029/rs_560x605-141129074805-meme-chaves-1.jpg?fit=around%7C560:605&output-quality=90&crop=560:605;center,top"
    const perfilpubli1 = "https://i.pinimg.com/550x/d9/b9/7b/d9b97b5646fbb691e29947a921049a1d.jpg"
    const perfilpubli2 = "https://static.imgs.app/content/assetz/uploads/2017/05/imagens-engracadas-de-piadas-12787.jpg"
    const perfilpubli3 = "https://cdn.dicionariopopular.com/imagens/foto-de-perfil-seu-madruga2.jpg"
    const perfilpubli4 = "https://i.pinimg.com/originals/9c/84/5f/9c845fc04a5e57f43c692879f564c79a.jpg"
    const curtidopor1 ="https://cdn.dicionariopopular.com/imagens/meme-as-branquelas2.jpg?auto_optimize=low"
    const curtidopor2 ="https://i0.wp.com/techwek.com/wp-content/uploads/2021/08/dog-malvadao.jpg?resize=598%2C598&ssl=1"
    const curtidopor3 ="https://media.istockphoto.com/photos/funny-profile-portrait-of-a-goose-looking-up-close-up-with-details-picture-id1091916768"
    const curtidopor4 ="https://cdn.dicionariopopular.com/imagens/grupo-cachorro-o-grito2.jpg?auto_optimize=low"
     
    return(
        <div class="feed">
                <div class="publicaçao">
                    <div class="perfilfoto"><img class="perfilPubli"src={perfilpubli1} alt="meow.perfil" width="32px"
                            height="32px"></img>
                        <div class="nomeperfil">
                            <h4>Jerry</h4>
                        </div>
                        <ion-icon class="ellipsis-horizontal-outline" name="ellipsis-horizontal" width="16px"
                            weight="16px"></ion-icon>
                    </div>
                    <div class="foto"><img src={publicacao1} onClick={()=>changeStyle(0)} alt="gato-telefone" width="612px" height="590px"></img>
                    </div>
                    <div class="icones">
                        <ion-icon name="heart" class="descurtidoCoracao"></ion-icon>
                        <ion-icon name="paper-plane-outline" class="paper-plane-outline"></ion-icon>
                        <ion-icon class="chatbubble-outline" name="chatbubble-outline"></ion-icon>
                        <ion-icon name="bookmark-outline" class="bookmark-outline"></ion-icon>
                    </div>
                    <div class="comentario">
                        <img class="curtidopor"src={curtidopor1} alt="" width="20px"></img>
                        <p class="pcomentario">Curtido por</p>
                        <h5 class="bold">responde aí</h5>
                        <p class="pcomentario"> e </p>
                        <h5 class="bold">outras 101.523 pessoas</h5>
                    </div>
                </div>
                <div class="publicaçao">
                    <div class="perfilfoto"><img class="perfilPubli"src={perfilpubli2} alt="perfil.dog" width="32px"
                            height="32px"></img>
                        <div class="nomeperfil">
                            <h4>Sauro</h4>
                        </div>
                        <ion-icon class="ellipsis-horizontal-outline" name="ellipsis-horizontal"></ion-icon>
                    </div>
                    <div class="foto"><img src={publicacao2} onClick={()=>changeStyle(1)}  alt="dog" width="612px"height="590px"></img>
                    </div>
                    <div class="icones">
                        <ion-icon name="heart-outline" class="descurtidoCoracao" width="16.5px" height="15.3px"></ion-icon>
                        <ion-icon name="paper-plane-outline" class="paper-plane-outline"></ion-icon>
                        <ion-icon class="chatbubble-outline" name="chatbubble-outline"></ion-icon>
                        <ion-icon name="bookmark-outline" class="bookmark-outline"></ion-icon>
                    </div>
                    <div class="comentario">
                        <img class="curtidopor" src={curtidopor2} alt="" width="20px"></img>
                        <p class="pcomentario">Curtido por</p>
                        <h5 class="bold">adorable_animals</h5>
                        <p class="pcomentario"> e </p>
                        <h5 class="bold">outras 99.523 pessoas</h5>
                    </div>
                </div>
                <div class="publicaçao">
                    <div class="perfilfoto"><img class="perfilPubli"src={perfilpubli3} alt="meow.perfil" width="32px"
                            height="32px"></img>
                        <div class="nomeperfil">
                            <h4>Madruga</h4>
                        </div>
                        <ion-icon class="ellipsis-horizontal-outline" name="ellipsis-horizontal" width="16px"
                            weight="16px"></ion-icon>
                    </div>
                    <div class="foto"><img src={publicacao3} onClick={()=>changeStyle(2)}  alt="gato-telefone" width="612px" height="590px"></img>
                    </div>
                    <div class="icones">
                    <ion-icon name="heart-outline" class="descurtidoCoracao"></ion-icon>
                        <ion-icon name="paper-plane-outline" class="paper-plane-outline"></ion-icon>
                        <ion-icon class="chatbubble-outline" name="chatbubble-outline"></ion-icon>
                        <ion-icon name="bookmark-outline" class="bookmark-outline"></ion-icon>
                    </div>

                    <div class="comentario">
                        <img class="curtidopor" src={curtidopor3} alt="" width="20px"></img>
                        <p class="pcomentario">Curtido por</p>
                        <h5 class="bold">responde aí</h5>
                        <p class="pcomentario"> e </p>
                        <h5 class="bold">outras 101.523 pessoas</h5>
                    </div>
                </div>
                <div class="publicaçao">
                    <div class="perfilfoto"><img class="perfilPubli"src={perfilpubli4} alt="meow.perfil" width="32px"
                            height="32px"></img>
                        <div class="nomeperfil">
                            <h4>Dobe</h4>
                        </div>
                        <ion-icon class="ellipsis-horizontal-outline" name="ellipsis-horizontal" width="16px"
                            weight="16px"></ion-icon>
                    </div>
                    <div class="foto"><img src={publicacao4} onClick={()=>changeStyle(3)}  alt="gato-telefone" width="612px" height="590px"></img>
                    </div>
                    <div class="icones">
                    <ion-icon name="heart-outline" class="descurtidoCoracao"></ion-icon>
                        <ion-icon name="paper-plane-outline" class="paper-plane-outline"></ion-icon>
                        <ion-icon class="chatbubble-outline" name="chatbubble-outline"></ion-icon>
                        <ion-icon name="bookmark-outline" class="bookmark-outline"></ion-icon>
                    </div>
                    <div class="comentario">
                        <img class="curtidopor" src={curtidopor4} alt="" width="20px"></img>
                        <p class="pcomentario">Curtido por</p>
                        <h5 class="bold">responde aí</h5>
                        <p class="pcomentario"> e </p>
                        <h5 class="bold">outras 101.523 pessoas</h5>
                    </div>
                </div>
            </div>
           
    )
}

export default Feed;
