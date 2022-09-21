import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/style.css";
import "../../../assets/plugins/fontawesome/css/all.min.css";
import "../../../assets/plugins/fontawesome/css/fontawesome.min.css";
import Footer from "../../../components/Footers/Footer";
import MHeaderHome from "../../../components/Headers/MHeader";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import TablePagination from "@material-ui/core/TablePagination";

import DropPlaceSection from "../../../components/DropsPlaceSection/DropPlace";

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

function AuctionDrops() {
  const [hide, setHide] = useState(false);
  const [tokenList, setTokenList] = useState([]);
  const [imageData, setImageData] = useState([]);

  const [rowsPerPage, setRowsPerPage] = React.useState(12);
  const [totalDrops, setTotalDrops] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleCloseBackdrop = () => {
    setOpen(false);
  };
  const handleShowBackdrop = () => {
    setOpen(true);
  };
  let getMyDrops = (start, end) => {
    handleShowBackdrop();
    axios.get(`/drop/drops/${start}/${end}`).then(
      (response) => {
        console.log("response", response);
        setTokenList(response.data.Dropdata);
        setTotalDrops(response.data.Dropscount);
        handleCloseBackdrop();
      },
      (error) => {
        if (process.env.NODE_ENV === "development") {
          console.log(error);
          console.log(error.response);
        }
        handleCloseBackdrop();
      }
    );
  };
  useEffect(() => {
    getMyDrops(0, rowsPerPage);
  }, []);
  const handleChangePage = (event, newPage) => {
    console.log("newPage", newPage);
    setPage(newPage);
    console.log("Start", newPage * rowsPerPage);
    console.log("End", newPage * rowsPerPage + rowsPerPage);
    getMyDrops(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    getMyDrops(0, parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <div className="main-wrapper">
        <div className="home-section home-full-height">
          <MHeaderHome selectedNav={"Drops"} />
          <div className="card-body">
            <div
              className="form-group"
              style={{ minHeight: "500px", marginTop: "120px" }}
            >
              {open ? (
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
              ) : tokenList.length === 0 ? (
                <Typography
                  variant="h6"
                  style={{ marginTop: "50px", marginBottom: "50px" }}
                >
                  <strong>Nothing to Display </strong>
                </Typography>
              ) : (
                //here
                <DropPlaceSection style={{ marginTop: "50px" }} />
              )}
            </div>
          </div>
          <TablePagination
            rowsPerPageOptions={[12, 24, 48]}
            component="div"
            count={totalDrops}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>

        <Footer position={"relative"} />
      </div>
    </>
  );
}

export default AuctionDrops;
