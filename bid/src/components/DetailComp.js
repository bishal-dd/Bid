import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";

export default function DetailComp() {
  const [show, setshow] = useState(false);

  const handelShow = () => setshow(true);
  const handelClose = () => setshow(false);

  const locate = useLocation();
  const product = locate.state;

  console.log(product.product_image);

  return (
    <>
      <div class="row container">
        <div class="col">
          <img src={product.product_image} width="600" height="500" />
        </div>
        <div class="col mt-5">
          <h3>{product.product_name}</h3>
          <h4>Current Bid:{product.product_price}</h4>
          <h4>Time remaining:10:23:90</h4>
          <p>{product.product_description}</p>
          <p>
            <Button class="btn" onClick={handelShow}>
              Place Bid
            </Button>
          </p>
        </div>

        <Modal show={show} onHide={handelClose}>
          <Modal.Header>
            <Modal.Title>Bid</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Place your Bid</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handelClose}>Bid</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
