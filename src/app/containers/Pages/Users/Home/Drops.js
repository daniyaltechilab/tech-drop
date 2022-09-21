import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  PreText,
  ViewAllLink,
  AuctionInfoMessgae,
  DropsCardContainer,
} from "./Market.styles";
import AuctionCard from "../../../../components/Cards/AuctionCard";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  badge: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function Drops() {
  const [hide, setHide] = useState(false);
  const [tokenList, setTokenList] = useState([]);
  const [imageData, setImageData] = useState([]);

  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [totalDrops, setTotalDrops] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  let getMyDrops = (start, end) => {
    axios.get(`/drop/drops/${start}/${end}`).then(
      (response) => {
        console.log("response", response);
        setTokenList(response.data.Dropdata);
        setTotalDrops(response.data.Dropscount);
      },
      (error) => {
        if (process.env.NODE_ENV === "development") {
          console.log(error);
          console.log(error.response);
        }
      }
    );
  };
  useEffect(() => {
    getMyDrops(0, rowsPerPage);
  }, []);
  return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Header --> */}
        <div className="page-header">
          {/* <Container> */}

          <div className="card-body">
            <h3>
              <PreText>
                <strong style={{ color: "#9f55ff" }}>Drops</strong>
                <ViewAllLink to="/auctionDrops" style={{ float: "right" }}>
                  View All{" "}
                </ViewAllLink>
              </PreText>
            </h3>
            <hr></hr>
            <div className="form-group">
              {open ? (
                <div align="center" className="text-center">
                  <Spinner
                    animation="border"
                    role="status"
                    style={{ color: "#9f55ff" }}
                  ></Spinner>
                  <span style={{ color: "#9f55ff" }} className="sr-only">
                    Loading...
                  </span>
                </div>
              ) : tokenList.length === 0 ? (
                <AuctionInfoMessgae
                  variant="h6"
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  <strong>Nothing to Display </strong>
                </AuctionInfoMessgae>
              ) : (
                // There was a grid here
                // apna card section
                <DropsCardContainer>
                  {tokenList.map((item, index) => (
                    <Link
                      to={"/auctionDrops/DropCubes/" + item._id}
                      key={index}
                    >
                      <AuctionCard index={index} item={item} />
                      {/* <AuctionCard type="drop2" /> */}
                    </Link>
                  ))}
                </DropsCardContainer>
                // apna card section
              )}
            </div>
          </div>
          {/* </Container> */}
        </div>
      </div>
    </>
  );
}

export default Drops;
