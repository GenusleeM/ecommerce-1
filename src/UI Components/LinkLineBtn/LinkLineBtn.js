import './LinkLineBtn.css'
import { useNavigate } from "react-router-dom";
import { Desktop, Mobile, MobileLandscape, Tablet } from "../../UI Components/MediaQuery/MediaQuery";


const LinkLineBtn = (props) => {
    // Navigation Variable
    let navigate = useNavigate();
    const linkHandeler = (e, info) => {
        e.preventDefault();
        navigate(`/product/${info !== 't-shirt' ? info : 'tshirt'}`, { replace: true });
    }
    return (
        <>
            <Desktop>
                <span className='LinkLineBtn' onClick={(e) => linkHandeler(e, props.title.toLowerCase())}>{props.title}</span>
            </Desktop>
            <Tablet>
                <span className='LinkLineBtn-tablet' onClick={(e) => linkHandeler(e, props.title.toLowerCase())}>{props.title}</span>
            </Tablet>
            <Mobile>
                <span className='LinkLineBtn-mobile' onClick={(e) => linkHandeler(e, props.title.toLowerCase())}>{props.title}</span>
            </Mobile>
            <MobileLandscape>
                <span className='LinkLineBtn-mobileLandscape' onClick={(e) => linkHandeler(e, props.title.toLowerCase())}>{props.title}</span>
            </MobileLandscape>
        </>
    )
}

export default LinkLineBtn;