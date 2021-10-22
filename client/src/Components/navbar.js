import {Link} from 'react-router-dom'
import {useDispatch, useSelector, } from 'react-redux'
import { current, logout } from '../Redux/actions/UserActions'
import {getPosts, EditPost} from '../Redux/actions/forumActions'

function Navbar(){
     const dispatch = useDispatch()
     const auth = useSelector(state=> state.UserReducer.auth)
    return(
       

                     <div className="nav" >  
                        {auth?       <div>

                    <ul className="logout">
                    
                      <Link to='/' >  <li><a href="home">Accueil</a></li> </Link>
                     <Link to='/About'>    <li><a href=" #">Numéro utile</a></li> </Link>
                    <Link to='/Info'>   <li><a href="#" onClick={() =>dispatch(EditPost)}>A propos de la maladie</a></li> </Link>
                      <Link to='/Lost'>    <li><a href="#"  onClick={()=>dispatch(current())}  >Disparition d'un proche</a></li></Link>
                    <Link to='/Forum'>    <li    onClick={()=>dispatch(getPosts())}  ><a href="#">Le Bolg</a></li></Link>
                    <Link to='/Signin'>    <li><a href="#" onClick={()=>dispatch(logout())}>Logout</a></li></Link>
                    
                     </ul>
                     </div>
                     :
                      <div >
                          <ul className="login">
                    <Link to='/' >  <li><a href="home">Accueil</a></li> </Link>
                    <Link to='/About'>    <li><a href=" #">Numéro utile</a></li> </Link>
                    <Link to='/Info'>   <li><a href="#" onClick={() =>dispatch(EditPost)}>A propos de la maladie</a></li> </Link>
                    <Link to='/Forum'>    <li><a href="#">Le Blog</a></li></Link>
                    <Link to='/lostList'>    <li><a href="#"  onClick={()=>dispatch(current())}  >Disparition d'un proche</a></li></Link>
                    <Link to='/Signin'>    <li><a href="#">SignIn</a></li></Link>
                    <Link to='/Signup'>    <li><a href="#">SignUp</a></li></Link>
                     
                   
                    
                     </ul>
                        </div>   }
                    
                    </div>

      

    )
}
export default Navbar