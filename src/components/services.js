
import SearchBar from "../components/SearchBar";
import BookData from "../components/Data.json";
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
                        <Nav.Link href="#link">Link</Nav.Link>    
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
                            <SearchBar placeholder="Search for a Building.." data={BookData} />
            </div>
                    
             <div class="directnames">
                        <ul className="Lists">
                          <a href="#action/3.1">
                              <li>New Building</li>
                           </a>
                          <a href="#action/3.1"><li>New Building</li></a>
                          <a href="#action/3.1"><li>New Building</li></a>
                        </ul>

                        <ul className="Lists">
                          <a href="#action/3.1"><li>New Building </li></a>
                          <a href="#action/3.1"><li>New Building</li></a>
                          <a href="#action/3.1"><li>New Building</li></a>
                          <a href="#action/3.1"><li>New Building</li></a>
                        </ul>

                    </div>

                <div className="works">
                <div className="imagework">
                    <img class="worksimage" src={files} alt="Card image cap"/>
                </div>
                <div className="worksdata">
                    <p> <span className="headingworks">  1 - Select The services<br/> </span>  
                        <h3 className="workspara">   Select the services you want from the homepage from the drop down menu.</h3>
                        <br/>
                        <span className="headingworks">  2 - Scroll and Select<br/> </span> 
                        <h3 className="workspara">   Find out according to reviews and your preferences that which service provider will suit you best.</h3>
                            <br/>
                            <span className="headingworks"> 3 - Contact Directly<br/> </span>
                            <h3 className="workspara">   you will be able to watch Service provider details</h3>
                    </p>    
                 </div>
            
                </div>

             </div>

             <footer>
                <div className="footerhome">
                        <div className="logo">
                        <img class="logoimage" src={Mylogo} alt="logoimage"/>
                              <h2>  329 Queensberry Street, North Melbourne VIC 3051, Australia.<br/>
                                    123 456 7890.<br/>
                                    support@prodrive.com.<br/></h2>  
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