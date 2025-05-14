import setinha from "../assets/setinha.png";
import produtoimagen from "../assets/produto-imagen.png"

const Produtos = () => {
    return ( 
        <section id="produtos">
            <div className="titulo">
                <h3>Produtos em alta</h3>
                <a href="">Ver todos <img src="images/setinha.png" alt=""/></a>
            </div>
            <div className="cards">
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={produtoimagen} alt=""/>
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5><del>$200</del>$100</h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={produtoimagen} alt=""/>
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5><del>$200</del>$100</h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={produtoimagen} alt=""/>
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5><del>$200</del>$100</h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={produtoimagen} alt=""/>
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5><del>$200</del>$100</h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={produtoimagen} alt=""/>
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5><del>$200</del>$100</h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={produtoimagen} alt=""/>
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5><del>$200</del>$100</h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={produtoimagen} alt=""/>
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5><del>$200</del>$100</h5>
                    </a>
                </div>
                <div className="card">
                    <a href="">
                        <div className="imagem">
                            <h6>30% off</h6>
                            <img src={produtoimagen} alt=""/>
                        </div>
                        <span>Tênis</span>
                        <h4>K-Swiss V8 - Masculino</h4>
                        <h5><del>$200</del>$100</h5>
                    </a>
                </div>
            </div>
        </section>
    )
}