import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import Rating from "react-rating";

const Products = () => {
  return (
    <div className="product">
      <Container className="text-center">
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded">
              <a href=" ">
                <Card.Img
                  style={{
                    maxHeight: "200px",
                    maxWidth: "150px",
                  }}
                  className="img-fluid "
                  src="https://images-eu.ssl-images-amazon.com/images/I/41E5Bva7sOL._AC_SX184_.jpg"
                />
              </a>

              <Card.Body>
                <a href=" ">
                  <strong>Product Name </strong>
                </a>

                <Card.Text as="div">
                  <div className="my-3 text-left">
                    <Rating
                      emptySymbol="fa fa-star-o fa-1x"
                      fullSymbol="fa fa-star fa-1x"
                      initialRating={4.5}
                      style={{ color: "orange" }}
                      readonly
                    />
                  </div>
                </Card.Text>

                <Card.Text as="h3">
                  <strong>20000</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded">
              <a href=" ">
                <Card.Img
                  style={{ maxHeight: "200px", maxWidth: "150px" }}
                  className="img-fluid "
                  src="https://images-eu.ssl-images-amazon.com/images/I/41E5Bva7sOL._AC_SX184_.jpg"
                />
              </a>

              <Card.Body>
                <a href=" ">
                  <strong>Product Name </strong>
                </a>

                <Card.Text as="div">
                  <div className="my-3">
                    <Rating
                      emptySymbol="fa fa-star-o fa-1x"
                      fullSymbol="fa fa-star fa-1x"
                      initialRating={4.5}
                      style={{ color: "orange" }}
                      readonly
                    />
                  </div>
                </Card.Text>

                <Card.Text as="h3">
                  <strong>20000</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded">
              <a href=" ">
                <Card.Img
                  style={{ maxHeight: "200px", maxWidth: "150px" }}
                  className="img-fluid h-5"
                  src="https://images-eu.ssl-images-amazon.com/images/I/41E5Bva7sOL._AC_SX184_.jpg"
                />
              </a>

              <Card.Body>
                <a href=" ">
                  <strong>Product Name </strong>
                </a>

                <Card.Text as="div">
                  <div className="my-3">
                    <Rating
                      emptySymbol="fa fa-star-o fa-1x"
                      fullSymbol="fa fa-star fa-1x"
                      initialRating={4.5}
                      style={{ color: "orange" }}
                      readonly
                    />
                  </div>
                </Card.Text>

                <Card.Text as="h3">
                  <strong>20000</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded">
              <a href=" ">
                <Card.Img
                  style={{
                    maxHeight: "200px",
                    maxWidth: "150px",
                  }}
                  className="img-fluid "
                  src="https://images-eu.ssl-images-amazon.com/images/I/41E5Bva7sOL._AC_SX184_.jpg"
                />
              </a>

              <Card.Body>
                <a href=" ">
                  <strong>Product Name </strong>
                </a>

                <Card.Text as="div">
                  <div className="my-3">
                    <Rating
                      emptySymbol="fa fa-star-o fa-1x"
                      fullSymbol="fa fa-star fa-1x"
                      initialRating={4.5}
                      style={{ color: "orange" }}
                      readonly
                    />
                  </div>
                </Card.Text>

                <Card.Text as="h3">
                  <strong>20000</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
