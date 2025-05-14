const Home = () => {
    return ( 
        <><Header /><main>
            <Banner />
            <Produtos />
            <Destaques />
            <Oferta />
        </main><Footer path="/" element={<Home />} />
        </>
     );
}
 
export default Home;