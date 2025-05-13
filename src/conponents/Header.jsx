const Header = () => {
    return ( 
        <header>
        <div className="topo">
            <div className="logo">
                <img src="images/logo.png" alt="Digital store logo"/>
                DIGITAL STORE
            </div>
            <div className="buscador">
                <input type="text" placeholder="Pesquisar produto..."/>
                <img src="images/icon-lupa.png" alt="lupa"/>
            </div>
            <div className="acoes">
                <a href="">Cadastre-se</a>
                <a href="" className="btn">Entrar</a>
                <div className="carrinho">
                    <img src="images/icon-carrinho.png" alt="carrinho"/>
                    <span>2</span>
                </div>
            </div>
        </div>
        <nav>
            <a href="" className="active">Home</a>
            <a href="">Produtos</a>
            <a href="">Categorias</a>
            <a href="">Meus Pedidos</a>
        </nav>
    </header>
     );
}
 
export default Header;