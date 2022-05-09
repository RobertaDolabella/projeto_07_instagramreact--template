function Stories() {
    const borda = "https://i.pinimg.com/564x/f5/03/f6/f503f64281e2b60686837c18e29dcab6.jpg"
    const fotoStory1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xFt7AeYUSs3YZD_C6gVZs2Oub3Xyffmd0A&usqp=CAU"
    const fotoStory2 = "https://pbs.twimg.com/profile_images/1322596648657313793/P3C1nnTk_400x400.jpg"
    const fotoStory3 = "https://i.pinimg.com/originals/40/10/1f/40101f4885578253feccd3de71746154.jpg"
    const fotoStory4 = "https://st2.depositphotos.com/1653909/8228/i/600/depositphotos_82284502-stock-photo-magician-hands-with-magic-wand.jpg"
    const fotoStory5 = "https://media.istockphoto.com/photos/man-bicycling-mountain-bike-silhouette-picture-id486166943"
    const fotoStory6 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJJR0hiRvHDj1jlz0oX4ozxfgHJek36Ktaw&usqp=CAU"
    const fotoStory7 = "https://img.ifunny.co/images/ddbe50f4c9c18162b29990dfa6546cb7ead242d2d9f194f464ce5ff236b84226_1.jpg"
    const fotoStory8 = "http://pm1.narvii.com/7573/75cf3b04b681aab3ec56643e9a6ad1ac5777f25er1-526-505v2_uhq.jpg"
    return (

        <div className="story">
            <div className="img-story">
                <img className="imagem1" src={borda} alt="imagem1" width="66px" />
                <img className="imagem1" src={borda} alt="imagem1" width="66px" />
                <img className="imagem1" src={borda} alt="imagem1" width="66px" />
                <img className="imagem1" src={borda} alt="imagem1" width="66px" />
                <img className="imagem1" src={borda} alt="imagem1" width="66px" />
                <img className="imagem1" src={borda} alt="imagem1" width="66px" />
                <img className="imagem1" src={borda} alt="imagem1" width="66px" />
                <img className="imagem1" src={borda} alt="imagem1" width="66px" />
            </div>
            <div className="img-perfil-story">
                <img className="foto-perfil-story" src={fotoStory1} alt=""
                    width="56px" height="56px"/>
                    <img className="foto-perfil-story" src={fotoStory2} alt="" width="56px"
                        height="56px"/>
                        <img className="foto-perfil-story" src={fotoStory3} alt="" width="56px" height="56px"/>
                            <img className="foto-perfil-story" src={fotoStory4} alt="" width="56px" height="56px" />
                            <img className="foto-perfil-story" src={fotoStory5} alt="" width="56px" height="56px" />
                            <img className="foto-perfil-story" src={fotoStory6} alt="" width="56px" height="56px" />
                            <img className="foto-perfil-story" src={fotoStory7} alt="" width="56px" height="56px" />
                            <img className="foto-perfil-story" src={fotoStory8} alt="" width="56px" height="56px" />

                        </div>
                        <div className="container-nome-stroy">
                            <div className="nome-story">
                                <p>crying</p>
                            </div>
                            <div className="nome-story">
                                <p>man</p>
                            </div>
                            <div className="nome-story">
                                <p>potates</p>
                            </div>
                            <div className="nome-story">
                                <p>unicorn</p>
                            </div>
                            <div className="nome-story">
                                <p>magic</p>
                            </div>
                            <div className="nome-story">
                                <p>bike</p>
                            </div>
                            <div className="nome-story">
                                <p>careca</p>
                            </div>
                            <div className="nome-story">
                                <p>Monkey</p>
                            </div>
                        </div>
                        <div className="seta">
                            <ion-icon className="chevron-forward-circle" name="chevron-forward-circle"></ion-icon>
                        </div>
                    </div>

                    )
}
export default Stories;