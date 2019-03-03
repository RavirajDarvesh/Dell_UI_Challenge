import React from "react";
import hi from "./hotelimg.jpg";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
  Badge
} from "reactstrap";
import "./style.css";

const Hotelcard = ({ data }) => {



  return (
    <div>
      <Container>
        <Row className="my-4 mx-2">
          {data.map((dataa, index) => {

            return (
              <Col xs="6" sm="4">
                <Card className="m-3">
                  <CardBody>
                <div className="d-flex">
                <CardTitle className="ml-auto">{dataa.Name}</CardTitle>
                <div className="cityBadge">Rank: {dataa.Ranking}</div>
                </div>
                  

                    <CardImg
                      className="my-2"
                      top
                      width="100%"
                      src= {hi}
                      alt="Card image cap"
                    />

                    <CardSubtitle className="cusinestyle">
                      {
                       dataa["Cuisine Style"]
                      }
                      </CardSubtitle>
                    <div className="d-flex mt-3">
                      <Badge color="success" className="p-2 mr-auto">{dataa.Rating}</Badge>
                      <span>{dataa.City}</span>
                      <Badge pill color="secondary" className="p-2 ml-auto">Reviews: {dataa["Number of Reviews"]}</Badge>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Hotelcard;
