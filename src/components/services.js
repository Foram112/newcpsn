import '../components/carousel.css';
import SearchBar from "../components/SearchBar";
import BookData from "../components/Data.json";
import buildata from "../components/building.json";
import files from '../images/file.gif';
import { Carousel } from 'react-bootstrap';
import Mylogo from '../images/CPSN.png'
import image1 from '../images/C1.jpg';
import image2 from '../images/C2.jpg';
import image3 from '../images/C3.jpg';
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {Carousels} from '../components/Carousels';

function Home ()
{
    return(
        
        /* Home-page*/
                   
           <div>      
                {/*Nav bar  */}
            <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Mylogo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#link">services</Nav.Link>    
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Login/Register"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Register Business</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Rent Offices</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            {/* Main 1st page of Website */}

            <div className="Mainpage">

                        <h1>Connecting Professional Services Nearby</h1>
                                             <div className="Search-box">
                                             <SearchBar placeholder="Search for a Building.." data={buildata} />
                                             </div>
                                            <h2 className="Or">Or</h2>
                                             <div className="Search-box2">
                                             <SearchBar placeholder="Search for a Service.." data={BookData} />
                                             </div>
                    

            <div className="carousel">
           
            <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousels
                show={2}
            >
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </Carousels>
        </div>
            
            </div>

             </div>

             <footer>
                <div className="footerhome">
                        <div className="logo">
                        <img class="logoimage" src={Mylogo} alt="logoimage"/>
                        <br/>
                              <h2> CPSN is website providing all services for commercial buildings<br/> 
                              <br/></h2>  
                   


                        </div>
                        <div className="footerdata">
                                <i class="fa fa-facebook"></i>  
                                <i class="fa fa-instagram"> </i>
                                <i class="fa fa-twitter"> </i>
                        </div>

                </div>

            </footer>
        </div>     
    
    );
}
export default Home;