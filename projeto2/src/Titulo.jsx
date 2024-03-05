function Titulo() {

    let nome = 'scremin'
    const idade = new Date().getFullYear() - 2002;
    const urlImg = "https://i.imgur.com/A5nV7xK.jpeg";

    return ( 
    <div>
        <h1>Olá, eu sou {nome}, tenho {idade} anos.</h1>
        <img src={urlImg} width={150} />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem sed iusto magni, eum neque deserunt quam possimus quasi aliquid praesentium doloremque rem, atque animi quia quo dolorem. Praesentium, at provident?</p>
    </div>
    )
}

export default Titulo