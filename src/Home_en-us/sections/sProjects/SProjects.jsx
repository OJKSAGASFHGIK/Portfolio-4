import site1 from './../../../assets/img/site1.png';
import site2 from './../../../assets/img/site2.png';
import site3 from './../../../assets/img/site3.png';

function SProjects({theme="sTheme", myId="idProjects"}){
    return(
        <>
            <section id={myId} className={`container-fluid ${theme} sProjects`}>
                <div>
                    <div>
                        <h3>Projetos:</h3>
                        <p className='small'><strong>Obs: Acesse link de projetos por um desktop</strong> <br/><em>Tópicos voltados para utilidade e didática</em></p>
                    </div>
                    <div className='row row-cols-md-3 row-cols-sm-2 row-cols-1' >
                        <a href='https://gre-commerce.vercel.app/' target='_blank' className="col">
                            <div className="card color" style={{cursor:"pointer"}}>
                            <div className="">
                            <img className="card-img-top" src={site1} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Gre-Commerce</h5>
                                <p className="card-text">E-Commerce Website</p>
                            </div>
                            </div>
                            </div>
                        </a>
                        <a href='https://greque-reactjs-library.netlify.app/' target='_blank' className="col" >
                            <div className="card color" style={{cursor:"pointer"}}>
                            <div className="">
                            <img className="card-img-top" src={site2} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">React.js Project</h5>
                                <p className="card-text">Tests with React</p>
                            </div>
                            </div>
                            </div>
                        </a>
                        <a href='https://greque-learning-bootstrap.netlify.app/' target='_blank' className="col" >
                            <div className="card color" style={{cursor:"pointer"}}>
                            <div className="">
                            <img className="card-img-top" src={site3} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Bootstrap Project</h5>
                                <p className="card-text">Tests with Bootstrap</p>
                            </div>
                            </div>
                            </div>
                        </a>
                        {/*
                        <div>
                            <article>
                                <h4>a1</h4>
                                <p>Bolo de cenoura</p>
                                <a href="./../../../../a1BoloDeCenoura.html" target="_blank">Clique
                                    aqui para ver mais...</a>
                            </article>
                        </div>
                        */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default SProjects