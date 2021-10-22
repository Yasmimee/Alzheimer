import { Link } from "react-router-dom"

function Footer() {
    return(

                      
                    <div className="footer">
                        
                        <div className="trait"></div>
                                <h4>about us</h4>
                                <ul className="footer-ul">
                                    <li>
                                       <Link to='/Info'> <a> En savoir plus sur l'Alzheimer</a></Link>
                                    </li>
                                    <li>
                                       <Link to='/About'> <a>  Numéro utiles</a> </Link>
                                    </li>
                                    <Link to='/Signup'> <li>
                                        <a> S'inscrire
                                        </a>
                                    </li></Link>
                                    <li>
                                        <a></a>
                                    </li>
                                    
                                </ul>
                                <h6>Copyright © ****** 2021.</h6>
                            </div>
                        
                      

    )
}
export default Footer