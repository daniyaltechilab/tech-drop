import { Avatar, CardHeader, Grid, TablePagination } from "@material-ui/core/";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Cookies from "js-cookie";
import Countdown from "react-countdown";
import r1 from "../../../../assets/img/patients/patient.jpg";
import { Link } from "react-router-dom";

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

function MySeasons(props) {
  const classes = useStyles();
  const [hide, setHide] = useState(false);
  const [tokenList, setTokenList] = useState([]);
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [totalSeasons, setTotalseasons] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const handleCloseBackdrop = () => {
    setOpen(false);
  };

  const handleShowBackdrop = () => {
    setOpen(true);
  };

  let getMySeasons = (start, end) => {
    handleShowBackdrop();
    axios
      .get(`https://r-robot-drop.herokuapp.com/season/seasons/${start}/${end}`)
      .then(
        (response) => {
          console.log("response", response);
          setTokenList(response.data.Seasondata);
          setTotalseasons(response.data.Seasonscount);
          handleCloseBackdrop();
        },
        (error) => {
          if (process.env.NODE_ENV === "development") {
            console.log(error);
            console.log(error.response);
          }
          if (
            error !== undefined &&
            error.response != undefined &&
            error.response.data !== undefined
          ) {
            if (
              error.response.data === "Unauthorized access (invalid token) !!"
            ) {
              Cookies.remove("Authorization");
              localStorage.removeItem("Address");
              window.location.reload();
            }
          } else {
            console.log("no response");
            //   window.location.reload();
          }
          handleCloseBackdrop();
        }
      );
  };
  const handleChangePage = (event, newPage) => {
    console.log("newPage", newPage);
    setPage(newPage);
    console.log("Start", newPage * rowsPerPage);
    console.log("End", newPage * rowsPerPage + rowsPerPage);
    getMySeasons(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    getMySeasons(0, parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    getMySeasons(0, rowsPerPage);
    // getCollections();?

    props.setActiveTab({
      dashboard: "",
      newNFT: "",
      orders: "",
      myNFTs: "",
      myCubes: "",
      myDrops: "",
      mySeason: "active",
      settings: "",
      privacyPolicy: "",
      termsandconditions: "",
      changePassword: "",
      newDrop: "",
      newSupefNFT: "",
      newCollection: "",
      newRandomDrop: "",
    });
  }, []);

  return (
    <div className="card">
      <ul className="breadcrumb" style={{ backgroundColor: "rgb(167,0,0)" }}>
        <li className="breadcrumb-item">
          <a href="/">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">My Seasons</li>
      </ul>
      <div className="card-body">
        <div className="form-group">
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
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <strong>Nothing to Display </strong>
            </Typography>
          ) : (
            <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              // alignItems="flex-start"
            >
              {tokenList.map((i, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Link to={"mySeason/drops/" + i._id}>
                    <Card
                      style={{ height: "100%" }}
                      variant="outlined"
                      className={classes.root}
                    >
                      <CardActionArea>
                        <CardHeader className="text-center" title={i.title} />
                        <CardMedia
                          className={classes.media}
                          image={i.image}
                          title=""
                        ></CardMedia>
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            <strong>Season Description: </strong>
                            {i.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions></CardActions>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </div>
      <TablePagination
        rowsPerPageOptions={[4, 8, 12, 24]}
        component="div"
        count={totalSeasons}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default MySeasons;
