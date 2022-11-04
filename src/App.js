import "./App.css";

import { AppBar, Container, Typography, Grow, Grid } from "@mui/material";

import useStyles from "./styles";
import memories from "./images/vLogo.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div
        style={{
          borderRadius: 15,
          margin: "30px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "static",
          border: "1px solid #ccc",
        }}
        position="static"
        color="inherit"
      >
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              {/* <Posts setCurrentId={setCurrentId} /> */}
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
