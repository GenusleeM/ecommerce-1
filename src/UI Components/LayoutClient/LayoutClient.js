import './LayoutClient.css'
import NavBar from "../NavBar/NavBar"
import Footer from '../Footer/Footer'
import { Desktop, Tablet, Mobile, MobileLandscape } from '../MediaQuery/MediaQuery'

const LayoutClient = (props) => {
    return (
        <div className="LayoutClient">
            <div className="LayoutClient-container">
                <div className="LayoutClient-nav">
                    <NavBar />
                </div>
                <Desktop>
                    <div className="LayoutClient-content">
                        {props.children}
                    </div>
                </Desktop>
                <Tablet>
                    <div className="LayoutClient-content-tablet">
                        {props.children}
                    </div>
                </Tablet>
                <Mobile>
                    <div className="LayoutClient-content-mobile">
                        {props.children}
                    </div>
                </Mobile>
                <MobileLandscape>
                    <div className="LayoutClient-content-MobileLandscape">
                        {props.children}
                    </div>
                </MobileLandscape>
                <div className="LayoutClient-footer">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default LayoutClient