import me from './../../../assets/img/me5.jpg';
import whats from './../../../assets/img/whatsapp.png';

import React, { useState } from 'react';

function SIntroduction({theme = "sTheme"}){
    const [a1Copied, a1SetCopied] = useState(false);
    const f1CopyEmail = () => {
        const fa1Email = document.getElementById('id1Show-Email').innerText;
        navigator.clipboard.writeText(fa1Email).then(() => {
            a1SetCopied(true);
            setTimeout(() => a1SetCopied(false), 2187);
        })
    }
    const [a2Copied, a2SetCopied] = useState(false);
    const f2CopyEmail = () => {
        const fa2Email = document.getElementById('id1Show-Number').innerText;
        navigator.clipboard.writeText(fa2Email).then(() => {
            a2SetCopied(true);
            setTimeout(() => a2SetCopied(false), 2187);
        })
    }

    return(
        <>
            <section className={`container-fluid ${theme} Introduction`}>
                <div className="row">
                    <div className="col-6">
                        <h2>Greque Souza Campos</h2>
                        <div className="d-none d-sm-block">
                            <div>
                                <p><span className="borderUwU">Front-End Developer</span><br/>
                                <span>November 2022 - Present</span></p>
                                • Networks and contact:<br/>
                                <a href="https://github.com/OJKSAGASFHGIK" target="_blank">Git</a> - <a href="https://www.linkedin.com/in/greque-chan/" target="_blank">Linkedin</a><br/>
                                
                                <a id='id1Show-Email' onClick={f1CopyEmail} style={{cursor: "pointer"}}>greque_chan@hotmail.com</a>
                                {a1Copied && <span ><br/>➟ E-mail copiado</span>}<br/>
                                
                                <div className='d-flex align-items-center'>
                                    <a href="https://wa.me/5521980636091" target="_blank"><img src={whats} className='me-1' style={{border:"none", height:"39px", width:"39px"}} alt="Whatsapp icon"/></a> <span><a id='id1Show-Number' onClick={f2CopyEmail} style={{cursor: "pointer"}}>+55 (21) 98063-6091</a></span>
                                    {a2Copied && <span ><br/>➟ Número copiado</span>}<br/>
                                </div>

                                • Pursuing Higher Education in:<br/>
                                Analysis and Systems Development<br/>
                                4¹ período / Agosto 2023 - Dezembro 2025<br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={me} alt="me" className="float-end me-md-3"/>
                    </div>
                </div>
                <div className="d-block d-sm-none">
                    <div>
                        <p><span className="borderUwU">Front-End Developer</span><br/>
                        <span>November 2022 - Present</span></p>
                        • Networks and contact:<br/>
                        <a href="https://github.com/OJKSAGASFHGIK" target="_blank">Git</a> - <a href="https://www.linkedin.com/in/greque-chan/" target="_blank">Linkedin</a><br/>
                        
                        <a id='id1Show-Email' onClick={f1CopyEmail} style={{cursor: "pointer"}}>greque_chan@hotmail.com</a>
                        {a1Copied && <span ><br/>➟ E-mail copiado</span>}<br/>
                        
                        <div className='d-flex align-items-center'>
                            <a href="https://wa.me/5521980636091" target="_blank"><img src={whats} className='me-1' style={{border:"none", height:"39px", width:"39px"}} alt="Whatsapp icon"/></a> <span><a id='id1Show-Number' onClick={f2CopyEmail} style={{cursor: "pointer"}}>+55 (21) 98063-6091</a></span>
                            {a2Copied && <span ><br/>➟ Número copiado</span>}<br/>
                        </div>

                        • Pursuing Higher Education in:<br/>
                        Analysis and Systems Development<br/>
                        4¹ período / Agosto 2023 - Dezembro 2025<br/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SIntroduction;