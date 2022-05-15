import './LinkImage.css'

import { Desktop, Mobile, MobileLandscape, Tablet } from "../../UI Components/MediaQuery/MediaQuery";


const LinkImage = (props) => {
    return (
        <>
            <Desktop>
                <div className="LinkImage-img-link" style={{
                    backgroundImage: `url(${props.image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <div className="LinkImage-img-link-title"><h1>{props.goTo}</h1></div>
                </div>
            </Desktop>
            <Tablet>
                <div className="LinkImage-img-link-tablet" style={{
                    backgroundImage: `url(${props.image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <div className="LinkImage-img-link-title-tablet"><h1>{props.goTo}</h1></div>
                </div>
            </Tablet>
            <Mobile>
                <div className="LinkImage-img-link-mobile" style={{
                    backgroundImage: `url(${props.image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <div className="LinkImage-img-link-title-mobile"><h1>{props.goTo}</h1></div>
                </div>
            </Mobile>
            <MobileLandscape>
                <div className="LinkImage-img-link-mobileLandscape" style={{
                    backgroundImage: `url(${props.image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <div className="LinkImage-img-link-title-mobileLandscape"><h1>{props.goTo}</h1></div>
                </div>
            </MobileLandscape>
        </>
    )
}

export default LinkImage;