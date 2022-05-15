import "./Feature.css";
import { Desktop, Mobile, Tablet } from "../../UI Components/MediaQuery/MediaQuery";
import FeatureCard from "../FeatureCard/FeatureCard";
import Feature1 from "../../Asset/Feature1.mp4";
import Feature2 from "../../Asset/Feature2.jpeg";
import Feature3 from "../../Asset//Feature3.mp4";
import Feature4 from "../../Asset/Feature4.jpeg";
import Feature5 from "../../Asset/Feature5.mp4";

const Feature = (props) => {
  return (
    <>
      <Desktop>
        <div className="Feature">
          <div className="Feature-header">
            <h1>{props.title}</h1>
          </div>
          <div className="Feature-conten">
            <FeatureCard
              file={Feature1}
              prodTitle="HALLS of IVY"
              text="Versatile"
              fileInfo="video"
            />
            <FeatureCard
              file={Feature2}
              prodTitle="[FUTURECRAFT . FOOTPRINT]"
              text="We protect the environment at every step of production."
              fileInfo="image"
            />
            <FeatureCard
              file={Feature3}
              prodTitle="FROM TRAINING TO RELAXATION"
              text="Everything for intensive training and relaxed relaxation. Choose from exclusive models. Only available at adidas."
              fileInfo="video"
            />
            <FeatureCard
              file={Feature4}
              prodTitle="NEW DECEMBER MODELS"
              text="Give joy. Give away sports motivation."
              fileInfo="image"
            />
            <FeatureCard
              file={Feature5}
              prodTitle="SUPERSTAR STATUS"
              text="Shoe design icon."
              fileInfo="video"
            />
          </div>
        </div>
      </Desktop>
      <Tablet>
        <div className="Feature-tablet">
          <div className="Feature-header-tablet">
            <h1>{props.title}</h1>
          </div>
          <div className="Feature-conten-tablet">
            <FeatureCard
              file={Feature1}
              prodTitle="HALLS of IVY"
              text="Versatile"
              fileInfo="video"
            />
            <FeatureCard
              file={Feature2}
              prodTitle="[FUTURECRAFT . FOOTPRINT]"
              text="We protect the environment at every step of production."
              fileInfo="image"
            />
            <FeatureCard
              file={Feature3}
              prodTitle="FROM TRAINING TO RELAXATION"
              text="Everything for intensive training and relaxed relaxation. Choose from exclusive models. Only available at adidas."
              fileInfo="video"
            />
            <FeatureCard
              file={Feature4}
              prodTitle="NEW DECEMBER MODELS"
              text="Give joy. Give away sports motivation."
              fileInfo="image"
            />
            <FeatureCard
              file={Feature5}
              prodTitle="SUPERSTAR STATUS"
              text="Shoe design icon."
              fileInfo="video"
            />
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="Feature-mobile">
          <div className="Feature-header-mobile">
            <h1>{props.title}</h1>
          </div>
          <div className="Feature-conten-mobile">
            <FeatureCard
              file={Feature1}
              prodTitle="HALLS of IVY"
              text="Versatile"
              fileInfo="video"
            />
            <FeatureCard
              file={Feature2}
              prodTitle="[FUTURECRAFT . FOOTPRINT]"
              text="We protect the environment at every step of production."
              fileInfo="image"
            />
            <FeatureCard
              file={Feature3}
              prodTitle="FROM TRAINING TO RELAXATION"
              text="Everything for intensive training and relaxed relaxation. Choose from exclusive models. Only available at adidas."
              fileInfo="video"
            />
            <FeatureCard
              file={Feature4}
              prodTitle="NEW DECEMBER MODELS"
              text="Give joy. Give away sports motivation."
              fileInfo="image"
            />
            <FeatureCard
              file={Feature5}
              prodTitle="SUPERSTAR STATUS"
              text="Shoe design icon."
              fileInfo="video"
            />
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default Feature;
