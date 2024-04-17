import { Col } from "react-bootstrap";

export const ProjectCardLandScape = ({ title, description, landScape, landScapeUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={landScapeUrl} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={landScape} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};