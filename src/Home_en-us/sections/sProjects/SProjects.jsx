function SProjects({theme="sTheme", myId="idProjects"}){
    return(
        <>
            <section id={myId} className={`container-fluid ${theme} sProjects`}>
                <div>
                    <div>
                        <h3>Projects:</h3>
                        <p className='small'><strong>Note: Access the link projects for a Desktop:</strong> <br/><em>Topics focused on usefulness and didactics</em></p>
                    </div>
                    <div className='row row-cols-md-3 row-cols-2'>
                        <div>
                            <article>
                                <h4>#</h4>
                                <p>#</p>
                                <a href="" target="_blank">Clique aqui para ver mais...</a>
                            </article>
                        </div>
                        <div>
                            <article>
                                <h4>React.JS <br/>Project</h4>
                                <p>Notas gerais sobre React.JS</p>
                                <a href="" target="_blank">Clique
                                    aqui para ver
                                    mais...</a>
                            </article>
                        </div>
                        <div>
                            <article>
                                <h4>Bootstrap <br/>Project</h4>
                                <p>Notas gerais sobre bootstrap</p>
                                <a href="" target="_blank">Clique
                                    aqui para ver mais...</a>
                            </article>
                        </div>
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