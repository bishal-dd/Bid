import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function DetailComp() {
  const [show, setshow] = useState(false);

  const handelShow = () => setshow(true);
  const handelClose = () => setshow(false);
  return (
    <>
      <div class="row container">
        <div class="col">
          <img
            src="http://cdn.shopify.com/s/files/1/0608/4988/1306/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1648711109"
            width="600"
            height="500"
          />
        </div>
        <div class="col mt-5">
          <h3>LED TV</h3>
          <h4>Current Bid:10,000</h4>
          <h4>Time remaining:10:23:90</h4>
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
