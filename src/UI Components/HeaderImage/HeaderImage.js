import "./HeaderImage.css";
import { Desktop, Mobile, MobileLandscape, Tablet } from "../../UI Components/MediaQuery/MediaQuery";

const HeaderImage = (props) => {
    const fileInfo = props.fileInfo;
    return (
        <>
            <Desktop>
                <div className="HeaderImage-header">
                    {fileInfo === "video" ? (
                        <video autoPlay="autoplay" muted loop>
                            <source src={props.file} />
                            Sorry your browser does not support.
                        </video>
                    ) : (
                        <div
                            className="HeaderImage-img"
                            style={{
                                backgroundImage: `url(${props.file})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        ></div>
                    )}
                    <div className="HeaderImage-header-title">
                        <div className="HeaderImage-header-title-container">
                            <div className="HeaderImage-header-title-top">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </Desktop>
            <Tablet>
                <div className="HeaderImage-header-tablet">
                    {fileInfo === "video" ? (
                        <video autoPlay="autoplay" muted loop>
                            <source src={props.file} />
                            Sorry your browser does not support.
                        </video>
                    ) : (
                        <div
                            className="HeaderImage-img"
                            style={{
                                backgroundImage: `url(${props.file})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        ></div>
                    )}
                    <div className="HeaderImage-header-title">
                        <div className="HeaderImage-header-title-container">
                            <div className="HeaderImage-header-title-top">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <div className="HeaderImage-header-mobile">
                    {fileInfo === "video" ? (
                        <video autoPlay="autoplay" muted loop>
                            <source src={props.file} />
                            Sorry your browser does not support.
                        </video>
                    ) : (
                        <div
                            className="HeaderImage-img-mobile"
                            style={{
                                backgroundImage: `url(${props.file})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        ></div>
                    )}
                    <div className="HeaderImage-header-title-mobile">
                        <div className="HeaderImage-header-title-container-mobile">
                            <div className="HeaderImage-header-title-top-mobile">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </Mobile>
            <MobileLandscape>
                <div className="HeaderImage-header-mobileLandscape">
                    {fileInfo === "video" ? (
                        <video autoPlay="autoplay" muted loop>
                            <source src={props.file} />
                            Sorry your browser does not support.
                        </video>
                    ) : (
                        <div
                            className="HeaderImage-img-mobileLandscape"
                            style={{
                                backgroundImage: `url(${props.file})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        ></div>
                    )}
                    <div className="HeaderImage-header-title">
                        <div className="HeaderImage-header-title-container">
                            <div className="HeaderImage-header-title-top">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </MobileLandscape>
        </>
    );
};

export default HeaderImage;
