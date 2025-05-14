import sapato from "../assets/sapato.png";
import detalhe from "../assets/detalhe";

const Banner = () => {
    return (
        <>
            <section id="banner">
                <div class="conteudo">
                    <h6>Melhores ofertas personalizadas</h6>
                    <h2>Queima de<br />estoque Nike 🔥</h2>
                    <p>Consequat culpa exercitation mollit nisi excepteur <br />do tempor laboris eiusmod irure consectetur.</p>
                    <a href="" class="btn">Ver Ofertas</a>
                </div>
                <img src={sapato} alt="" class="tenis" />
                <img src={detalhe} alt="" class="detalhe" />
            </section>

        </>
    );
}

export default Banner;