function Topo() {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
    const insta = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeI2kCPHOKXqCaYxvorTcIETh8oDlm11ZplA&usqp=CAU"
    return (

    <div class="topo">
    <ion-icon name="logo-instagram" class="logo-instagram"></ion-icon>
    <div class="linha-vertical"></div>
    <img src={insta} class="logo" alt="logo" width="120px" />
    <div class="botao">Pesquisar</div>
    <ion-icon name="paper-plane-outline" class="paper-plane-outline"></ion-icon>
    <ion-icon name="compass-outline" class="compass-outline"></ion-icon>
    <ion-icon name="heart-outline" class="heart-outline"></ion-icon>
    <ion-icon name="person-outline" class="person-outline"></ion-icon>
</div>
    )
}
export default Topo;