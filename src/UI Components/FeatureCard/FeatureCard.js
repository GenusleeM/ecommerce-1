import "./FeatureCard.css";
import { BsCamera } from "react-icons/bs";
import { Desktop, Mobile, Tablet } from "../../UI Components/MediaQuery/MediaQuery";

const FeatureCard = (props) => {
    const fileInfo = props.fileInfo;
    return (
        <>
            <Desktop>
                <div className="FeatureCard">
                    {fileInfo === "video" ? (
                        <video autoPlay="autoplay" muted loop>
                            <source src={props.file} />
                            Sorry your browser does not support.
                        </video>
                    ) : (
                        <div className="FeatureCard-img-container">
                            <div
                                style={{
                                    backgroundImage: `url(${props.file})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                                className="FeatureCard-img"
                            >
                                {!props.file && <BsCamera />}
                            </div>
                        </div>
                    )}

                    <div className={`FeatureCard-title ${fileInfo !== "video" ? 'FeatureCard-img-text' : ''}`}>
                        <h1>{props.prodTitle}</h1>
                        <p>{props.text}</p>
                    </div>
                </div>
            </Desktop>
            <Tablet>
                <div className="FeatureCard-tablet">
                    {fileInfo === "video" ? (
                        <video autoPlay="autoplay" muted loop>
                            <source src={props.file} />
                            Sorry your browser does not support.
                        </video>
                    ) : (
                        <div className="FeatureCard-img-container-tablet">
                            <div
                                style={{
                                    backgroundImage: `url(${props.file})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                                className="FeatureCard-img-tablet"
                            >
                                {!props.file && <BsCamera />}
                            </div>
                        </div>
                    )}

                    <div className={`FeatureCard-title-tablet ${fileInfo !== "video" ? 'FeatureCard-img-text-tablet' : ''}`}>
                        <h1>{props.prodTitle}</h1>
                        <p>{props.text}</p>
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <div className="FeatureCard-mobile">
                    {fileInfo === "video" ? (
                        <video autoPlay="autoplay" muted loop>
                            <source src={props.file} />
                            Sorry your browser does not support.
                        </video>
                    ) : (
                        <div className="FeatureCard-img-container-mobile">
                            <div
                                style={{
                                    backgroundImage: `url(${props.file})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                                className="FeatureCard-img-mobile"
                            >
                                {!props.file && <BsCamera />}
                            </div>
                        </div>
                    )}

                    <div className={`FeatureCard-title-mobile ${fileInfo !== "video" ? 'FeatureCard-img-text-mobile' : ''}`}>
                        <h1>{props.prodTitle}</h1>
                        <p>{props.text}</p>
                    </div>
                </div>
            </Mobile>
        </>
    );
};

export default FeatureCard;
