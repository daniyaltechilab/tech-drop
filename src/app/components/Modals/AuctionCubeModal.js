import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Modal, Spinner, Button } from "react-bootstrap";
import "../../assets/css/bootstrap.min.css";
import DateTimePicker from "react-datetime-picker";
import "../../assets/css/style.css";
import "../../assets/plugins/fontawesome/css/all.min.css";
import "../../assets/plugins/fontawesome/css/fontawesome.min.css";

function AuctionCubeModal(props) {
  const [time, setTime] = useState(new Date());
  const [timeStamp, setTimeStamp] = useState(time.getTime() / 1000);
  const [price, setPrice] = useState();
  let [minimumBid, setMinimumBid] = useState();
  let [bidDelta, setBidDelta] = useState();

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [startTimeStamp, setStartTimeStamp] = useState(
    startTime.getTime() / 1000
  );
  const [endTimeStamp, setEndTimeStamp] = useState(endTime.getTime() / 1000);
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Put on Auction</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {" "}
        <i className="fas fa-exclamation-circle fa-10x"></i>
      </Modal.Body>
      <Modal.Body>
        <div className="container">
          <div className="form-group">
            <label>Auction Starts At</label>
            <div className="form-group">
              <DateTimePicker
                className="form-control"
                onChange={(e) => {
                  console.log(e);
                  console.log("e.getTime()", Math.round(e.getTime() / 1000));
                  setStartTimeStamp(Math.round(e.getTime() / 1000));

                  setStartTime(e);
                }}
                value={startTime}
              />
            </div>
            <label>Auction Ends At</label>
            <div className="form-group">
              <DateTimePicker
                className="form-control"
                onChange={(e) => {
                  console.log(e);
                  console.log("e.getTime()", Math.round(e.getTime() / 1000));
                  setEndTimeStamp(Math.round(e.getTime() / 1000));
                  setEndTime(e);
                }}
                value={endTime}
              />
            </div>
            <label>Minimum Bid (WETH)</label>
            <div className="form-group">
              <div className="filter-widget">
                <input
                  type="number"
                  placeholder="Enter Total Supply"
                  required
                  value={minimumBid}
                  placeholder=""
                  className="form-control"
                  onChange={(e) => {
                    setMinimumBid(e.target.value);
                  }}
                />
              </div>
            </div>
            <label>Bid Delta (WETH)</label>
            <div className="form-group">
              <div className="filter-widget">
                <input
                  type="number"
                  placeholder=""
                  required
                  value={bidDelta}
                  placeholder=""
                  className="form-control"
                  onChange={(e) => {
                    setBidDelta(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          Close
        </Button>
        {props.isConfirmingSale ? (
          <div align="center" className="text-center">
            <Spinner
              animation="border"
              role="status"
              style={{ color: "#ff0000" }}
            ></Spinner>
            <span style={{ color: "#ff0000" }} className="sr-only">
              Loading...
            </span>
          </div>
        ) : (
          <Button
            variant="primary"
            onClick={() =>
              props.putOnAuction(
                minimumBid,
                bidDelta,
                startTime,
                endTime,
                startTimeStamp,
                endTimeStamp
              )
            }
          >
            Yes, Proceed!
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default AuctionCubeModal;
