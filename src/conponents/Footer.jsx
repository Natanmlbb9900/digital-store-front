import Banner from  "./components/Banner";
import Destaques from "./components/Destaques";
import Produtos from "./components/Produtos";


const Footer = () => {
    return ( 
        <footer>
        <div class="rodape">
            <div class="conteudo">
                <img src="images/logo-branca.png" alt="Digital Store"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <div class="redes">
                    <a href=""><box-icon type='logo' name='facebook'></box-icon></a>
                    <a href=""><box-icon name='instagram' type='logo'></box-icon></a>
                    <a href=""><box-icon name='twitter' type='logo'></box-icon></a>
                </div>
            </div>
            <div class="sitemap">
                <div>
                    <h5>Informação</h5>
                    <a href="">Sobre Drip Store</a>
                    <a href="">Segurança</a>
                    <a href="">Wishlist</a>
                    <a href="">Blog</a>
                    <a href="">Trabalhe conosco</a>
                    <a href="">Meus Pedidos</a>
                </div>
                <div>
                    <h5>Categorias</h5>
                    <a href="">Camisetas</a>
                    <a href="">Calças</a>
                    <a href="">Bonés</a>
                    <a href="">Headphones</a>
                    <a href="">Tênis</a>
                </div>
                <div>
                    <h5>Contato</h5>
                    <a href="">
                        <address>
                            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE 60150-161
                        </address>
                    </a>
                    <a href="tel:8530513411">(85) 3051-3411</a>
                </div>
            </div>
        </div>
        <h6>&copy; 2025 Digital College</h6>
    </footer>
     );
}
 
export default Footer;