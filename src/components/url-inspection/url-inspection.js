import { useState, useEffect } from "react";
import * as React from "react";
import {
  Card,
  CardContent,
  Divider,
  TextField,
  Chip,
  Grid,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import MuiAlert from "@mui/material/Alert";
import SearchIcon from "@mui/icons-material/Search";

import HTMLparser from "../../utils/HTMLparser";
import HTMLfetch from "../../utils/HTMLfetch";

export const UrlInspection = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const [articleData, setArticleData] = useState([]);
  const [elements, setElements] = useState([]);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  useEffect(() => {
    setSearchValue(
      "https://www.express.co.uk/news/world/1769777/body-found-british-boy-thailand-suraphltchaya-khamsa-woramet-ben-taota"
    );
  }, []);

  const handleSearchField = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchButton = async () => {
    setError("");

    setLoading(true);

    HTMLfetch(searchValue).then((data) => {
      setLoading(false);

      let a, b;
      [a, b] = HTMLparser(data);

      setArticleData(a);
      setElements(b);
    });
  };

  const parseHtml = () => {
    articleData.map((item, key) => {
      item.value = "Test";
      articleData[key] = item;
      setArticleData(articleData);
    });

    elements.map((item, key) => {
      item.value = "Yes";
      elements[key] = item;
      setElements(elements);
    });
  };

  const elementStatus = (item) => {
    if (item.value === "Yes") {
      return <Chip label="Yes" color="success" />;
    } else if (item.value === "No") {
      return <Chip label="No" color="error" />;
    } else if (item.value !== null) {
      return item.value;
    } else {
      return (
        <LoadingButton
          loading
          variant="outlined"
          style={{ borderRadius: 16, padding: 3, width: 46, minWidth: 0 }}
        >
          Loading
        </LoadingButton>
      );
    }
  };

  return (
    <form {...props}>
      <Card>
        <CardContent>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={10}>
              <TextField
                fullWidth
                label="URL"
                margin="normal"
                name="name"
                type="text"
                value={searchValue}
                variant="outlined"
                color="info"
                onChange={handleSearchField}
                focused
              />
            </Grid>
            <Grid item>
              <LoadingButton
                loading={loading}
                loadingPosition="start"
                startIcon={<SearchIcon />}
                variant="contained"
                color="info"
                size="large"
                onClick={handleSearchButton}
              >
                Search
              </LoadingButton>
            </Grid>
          </Grid>

          {error ? <Alert severity="error">{error}</Alert> : ""}
        </CardContent>

        {articleData.length > 1 ? (
          <>
            <Divider>
              <Chip label="Info" />
            </Divider>
            <CardContent>
              <Grid container direction="row" alignItems="center" spacing={1}>
                {articleData.map((item, key) => (
                  <Grid key={key} item xs={4}>
                    <strong>{item.name}:</strong> {elementStatus(item)}
                  </Grid>
                ))}
              </Grid>
            </CardContent>

            <Divider>
              <Chip label="Elements" />
            </Divider>
            <CardContent>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
              >
                {elements.map((item, key) => (
                  <Grid key={key} item>
                    <strong
                      style={{
                        width: 300,
                        float: "left",
                      }}
                    >
                      {item.name}:
                    </strong>{" "}
                    {elementStatus(item)}
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </>
        ) : (
          ""
        )}
      </Card>
    </form>
  );
};
