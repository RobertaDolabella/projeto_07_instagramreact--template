import React from 'react';
import './App.css'

function Feed(){

// logica
const [Like, setLike] = React.useState("descurtido");
const [Coracao, setCoracao] = React.useState("descurtidoCoracao");


function changeStyle(){
    console.log(Like)
    if(Like=="descurtido"){
        setLike("curtido");
        console.log(Like)
        setCoracao("curtidoCoracao");
    }
    else{
        setLike("descurtido");
        console.log(Like)
        setCoracao("descurtidoCoracao");
  }
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
        <div className="feed">
                <div className="publicaçao">
                    <div className="perfilfoto"><img className="perfilPubli"src={perfilpubli1} alt="meow.perfil" width="32px"
                            height="32px"></img>
                        <div className="nomeperfil">
                            <h4>Jerry</h4>
                        </div>
                        <ion-icon className="ellipsis-horizontal-outline" name="ellipsis-horizontal" width="16px"
                            weight="16px"></ion-icon>
                    </div>
                    <div className="foto"><img src={publicacao1} onClick={changeStyle} alt="gato-telefone" width="612px" height="590px"></img>
                    <ion-icon name="heart" className={Like} width="16px" weight="100px"></ion-icon>
                    </div>
                    <div className="icones">
                        <ion-icon name="heart" className={Coracao}></ion-icon>
                        <ion-icon name="paper-plane-outline" className="paper-plane-outline"></ion-icon>
                        <ion-icon className="chatbubble-outline" name="chatbubble-outline"></ion-icon>
                        <ion-icon name="bookmark-outline" className="bookmark-outline"></ion-icon>
                    </div>
                    <div className="comentario">
                        <img className="curtidopor"src={curtidopor1} alt="" width="20px"></img>
                        <p className="pcomentario">Curtido por</p>
                        <h5 className="bold">responde aí</h5>
                        <p className="pcomentario"> e </p>
                        <h5 className="bold">outras 101.523 pessoas</h5>
                    </div>
                </div>
                <div className="publicaçao">
                    <div className="perfilfoto"><img className="perfilPubli"src={perfilpubli2} alt="perfil.dog" width="32px"
                            height="32px"></img>
                        <div className="nomeperfil">
                            <h4>Sauro</h4>
                        </div>
                        <ion-icon className="ellipsis-horizontal-outline" name="ellipsis-horizontal"></ion-icon>
                    </div>
                    <div className="foto"><img src={publicacao2} onClick={changeStyle}  alt="dog" width="612px"height="590px"></img>
                    <ion-icon name="heart" className={Like} width="16px" weight="100px"></ion-icon>
                    </div>
                    <div className="icones">
                        <ion-icon name="heart-outline" className={Coracao} width="16.5px" height="15.3px"></ion-icon>
                        <ion-icon name="paper-plane-outline" className="paper-plane-outline"></ion-icon>
                        <ion-icon className="chatbubble-outline" name="chatbubble-outline"></ion-icon>
                        <ion-icon name="bookmark-outline" className="bookmark-outline"></ion-icon>
                    </div>
                    <div className="comentario">
                        <img className="curtidopor" src={curtidopor2} alt="" width="20px"></img>
                        <p className="pcomentario">Curtido por</p>
                        <h5 className="bold">adorable_animals</h5>
                        <p className="pcomentario"> e </p>
                        <h5 className="bold">outras 99.523 pessoas</h5>
                    </div>
                </div>
                <div className="publicaçao">
                    <div className="perfilfoto"><img className="perfilPubli"src={perfilpubli3} alt="meow.perfil" width="32px"
                            height="32px"></img>
                        <div className="nomeperfil">
                            <h4>Madruga</h4>
                        </div>
                        <ion-icon className="ellipsis-horizontal-outline" name="ellipsis-horizontal" width="16px"
                            weight="16px"></ion-icon>
                    </div>
                    <div className="foto"><img src={publicacao3} onClick={changeStyle}  alt="gato-telefone" width="612px" height="590px"></img>
                    <ion-icon name="heart" className={Like} width="16px" weight="100px"></ion-icon>
                    </div>
                    <div className="icones">
                    <ion-icon name="heart-outline" className={Coracao}></ion-icon>
                        <ion-icon name="paper-plane-outline" className="paper-plane-outline"></ion-icon>
                        <ion-icon className="chatbubble-outline" name="chatbubble-outline"></ion-icon>
                        <ion-icon name="bookmark-outline" className="bookmark-outline"></ion-icon>
                    </div>

                    <div className="comentario">
                        <img className="curtidopor" src={curtidopor3} alt="" width="20px"></img>
                        <p className="pcomentario">Curtido por</p>
                        <h5 className="bold">responde aí</h5>
                        <p className="pcomentario"> e </p>
                        <h5 className="bold">outras 101.523 pessoas</h5>
                    </div>
                </div>
                <div className="publicaçao">
                    <div className="perfilfoto"><img className="perfilPubli"src={perfilpubli4} alt="meow.perfil" width="32px"
                            height="32px"></img>
                        <div className="nomeperfil">
                            <h4>Dobe</h4>
                        </div>
                        <ion-icon className="ellipsis-horizontal-outline" name="ellipsis-horizontal" width="16px"
                            weight="16px"></ion-icon>
                    </div>
                    <div className="foto"><img src={publicacao4} onClick={changeStyle}  alt="gato-telefone" width="612px" height="590px"></img>
                    <ion-icon name="heart" className={Like} width="16px" weight="100px"></ion-icon></div>
                    <div className="icones">
                    <ion-icon name="heart-outline" className={Coracao}></ion-icon>
                        <ion-icon name="paper-plane-outline" className="paper-plane-outline"></ion-icon>
                        <ion-icon className="chatbubble-outline" name="chatbubble-outline"></ion-icon>
                        <ion-icon name="bookmark-outline" className="bookmark-outline"></ion-icon>
                    </div>
                    <div className="comentario">
                        <img className="curtidopor" src={curtidopor4} alt="" width="20px"></img>
                        <p className="pcomentario">Curtido por</p>
                        <h5 className="bold">responde aí</h5>
                        <p className="pcomentario"> e </p>
                        <h5 className="bold">outras 101.523 pessoas</h5>
                    </div>
                </div>
            </div>
    )
}

export default Feed;
