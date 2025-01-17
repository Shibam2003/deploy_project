import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        
            <div className="container-fluid">
                <div className="row header" style={{backgroundColor: "black"}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-2 left text-center text-white">SPAM ANALYSER</div>
                            <div className="col-md-8 mid d-flex justify-content-center">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <div className="container-fluid">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                            <ul className="navbar-nav">
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        Website
                                                    </a>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                        <li><a className="dropdown-item" href="#">CAA</a></li>
                                                        <li><a className="dropdown-item" href="#">SOA</a></li>
                                                        <li><a className="dropdown-item" href="#">Pointer</a></li>

                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        URL
                                                    </a>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                        <li><a className="dropdown-item" href="#">Encoding</a></li>
                                                        <li><a className="dropdown-item" href="#">Decoding</a></li>

                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        Spam Verification
                                                    </a>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                        <li><a className="dropdown-item" href="#">Phising</a></li>
                                                        <li><a className="dropdown-item" href="#">Smishing</a></li>

                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link text-white" href="#">About</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link text-white" href="#">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-md-2 right">
                                <div className="btn btn-success mx-1"><Link to={"/login"}>Login</Link></div>
                                <div className="btn btn-success mx-1"><Link to={"/signup"}>SignUp</Link></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row about">
                    <div className="col">
                        <div className="container">
                            <div className="row pt-5">
                                <div className="col-md-6 col-sm-12 text-white pt-5 pb-5 ps-5">
                                    <div className="pb-5 h1">Simplify the security assessment process with hosted vulnerability scanners</div>
                                    <div className="row desc pb-5">
                                        From attack surface discovery to vulnerability identification, actionable network intelligence for IT & security operations.
                                    </div>
                                    <div className="row">
                                        <div className="col-3 btn btn-light">Use Cases</div>
                                        <div className="col-2"></div>
                                        <div className="col-3 btn btn-light">Pricing</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="row online mt-5 mb-5">
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h2 className="text-center mb-4 h2">Online Vulnerability Scanners</h2>
                                    <p className="text-center mb-5"> Proactively hunt for security weakness. Pivot from attack surface discovery to vulnerability identification.</p>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-md-4 col-sm-12 mt-5">
                                    <div className='d-flex justify-content-center align-items-center'><img src="https://hackertarget.com/images/shield-security.webp" alt="" height="60" width="60" /></div>
                                    <h4 className='h4'>Trusted Tools</h4>
                                    <p>Find security holes with trusted open source tools. Get access to tools used by penetration testers and security professionals around the world.</p>
                                </div>
                                <div className="col-md-4 col-sm-12 mt-5">
                                <div className='d-flex justify-content-center align-items-center'><img src="https://hackertarget.com/images/threat-actor.webp" alt="" height="60" width="60" /></div>
                                    <h4 className='h4'>Attacker Focused</h4>
                                    <p>Hunt vulnerabilities from the attackers perspective. Simulating real world security events, testing vulnerabilities and incident response.</p>
                                </div>
                                <div className="col-md-4 col-sm-12 mt-5">
                                <div className='d-flex justify-content-center align-items-center'><img src="https://hackertarget.com/images/cybersecurity-eye.webp" alt="" height="60" width="60" /></div>
                                    <h4 className='h4'>Know Your Network</h4>
                                    <p>Discover the attack surface with tools and open source intelligence. Protect your network with improved visibility.</p>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-md-4 col-sm-12 mt-5">
                                <div className='d-flex justify-content-center align-items-center'><img src="https://hackertarget.com/images/global-security.webp" alt="Fingerprint Security" height="60" width="60" /></div>
                                    <h4 className='h4'>Experience</h4>
                                    <p>Over 1 million scans performed last year. Our vulnerability scanners have been launching packets since 2007.</p>
                                </div>
                                <div className="col-md-4 col-sm-12 mt-5">
                                <div className='d-flex justify-content-center align-items-center'><img src="https://hackertarget.com/images/fingerprint-security.webp" alt="Global Security" height="60" width="60" /></div>
                                    <h4 className='h4'>Find the Problem</h4>
                                    <p>Fixing security issues requires you find them. Identify the issue, re-mediate the risk and test again to be sure.</p>
                                </div>
                                <div className="col-md-4 col-sm-12 mt-5">
                                <div className='d-flex justify-content-center align-items-center'><img src="https://hackertarget.com/images/network-performance.webp" alt="Network Performance" height="60" width="60" /></div>
                                    <h4 className='h4'>Performance</h4>
                                    <p>Fast servers optimized for vulnerability scanning across the Internet. No maintenance or installation required.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row features mt-5">

                    <div className="container mt-5">
                        <div className="row mt-5">
                            <div className="col-md-6 col-sm-12 d-flex align-items-center">
                                <img src="https://hackertarget.com/images/online-vulnerability-scanner-screenshot.webp" alt=""
                                    height="600px" width="auto" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <h3>Key Features</h3>
                                <p>There is a reason why Fortune 100 companies, large government agencies and IT professionals from around the world are renewing each year.</p>
                                <div className="row checkbox">
                                    <div className="col-2 d-flex align-items-center">
                                        <i className="fa-solid fa-check-to-slot fa-2xl"></i>
                                    </div>
                                    <div className="col-10">
                                        <h5>Attack Surface Discovery</h5>
                                        <p>Find forgotten assets and poorly maintained endpoints. Network visibility for Red and Blue Teams.
                                        </p>
                                    </div>
                                </div>
                                <div className="row checkbox">
                                    <div className="col-2 d-flex align-items-center">
                                        <i className="fa-solid fa-check-to-slot fa-2xl"></i>
                                    </div>
                                    <div className="col-10">
                                        <h5>No Installation or Maintenance</h5>
                                        <p>Being a hosted service there is nothing to install or maintain. Scan when you want from anywhere.
                                        </p>
                                    </div>
                                </div>
                                <div className="row checkbox">
                                    <div className="col-2 d-flex align-items-center">
                                        <i className="fa-solid fa-check-to-slot fa-2xl"></i>
                                    </div>
                                    <div className="col-10">
                                        <h5>Vulnerability Management</h5>
                                        <p>Schedule OpenVAS and Nmap for ongoing vulnerability detection and firewall monitoring.
                                        </p>
                                    </div>
                                </div>
                                <div className="row checkbox">
                                    <div className="col-2 d-flex align-items-center">
                                        <i className="fa-solid fa-check-to-slot fa-2xl"></i>
                                    </div>
                                    <div className="col-10">
                                        <h5>Simple Interface</h5>
                                        <p>Launch vulnerability scans with a simple form. Select required options and wait for your results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row footer mt-5 pt-4 pb-4" style={{backgroundColor: "grey"}}>
                    <div className="col">
                        <div className="container">
                            <div className="row pt-5 pb-4">
                                <div className="col-md-4 d-flex flex-column justify-content-center">
                                <div className="row mb-4">
                                <i class="fa-solid fa-envelope"> :&nbsp;
                                <a style={{fontFamily:"Times New Roman"}} href="mailto:shirinparveen44@gmail.com" target='_blank'>shirinparveen44@gmail.com</a></i>
                                     
                                </div>
                                <div className="row">
                                <i class="fa-solid fa-phone"> :&nbsp;
                                <a style={{fontFamily:"Times New Roman"}} href="tel:1234567890" target='_blank'>+91-1234567890</a></i>
                                </div>
                                </div>
                                <div className="col-md-4 text-center d-flex align-items-center justify-content-center">Saptarshi Ghosh<br />
                                    Shirin Parveen<br />
                                    Shibam Chakraborty<br />
                                    Shreya Ghosh<br />
                                    Srinjay Fadikar<br />
                                    Soham Das
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-end h3">Team Human Cybrogs</div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        

    )
}

export default LandingPage;
