function Topo() {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
    const insta = "https://e7.pngegg.com/pngimages/783/216/png-clipart-little-black-dress-little-black-dress-logo-product-intagram-text-logo.png"
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