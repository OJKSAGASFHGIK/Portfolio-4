import './../../../assets/css/css.css';

function Skills({theme="sTheme", myId="idSkills"}){
    return(
        <>
            <section id={myId} className={`container-fluid ${theme} Skills`}>
                <h3>Proficiências:</h3>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <table className=''>
                            <thead>
                                <tr>
                                    <th>✔ Competências</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>React, Next</td>
                                </tr>
                                <tr>
                                    <td>Tailwind CSS, Bootstrap, CSS</td>
                                </tr>
                                <tr>
                                    <td>HTML, JavaScript, TypeScript, PHP, Python</td>
                                </tr>
                                <tr>
                                    <td>MySQL</td>
                                </tr>
                                <tr>
                                    <td>Microsoft Office</td>
                                </tr>
                            </tbody>

                            {/*<tfoot>
                                <tr>
                                    <td></td>
                                </tr>
                            </tfoot>*/}
                        </table>
                    </div>
                    <div className='col-12 col-md-6'>
                        {/* <table className=''>
                            <thead>
                                <tr>
                                    <th>✢ Extra:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Conceitos de POO e lógicas fundamentais</td>
                                </tr>
                            </tbody>
                        </table> */}
                        <table className=''>
                            <thead>
                                <tr>
                                    <th>● Idiomas:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Português Nativo</td>
                                </tr>
                                <tr>
                                    <td>Inglês Avançado</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills