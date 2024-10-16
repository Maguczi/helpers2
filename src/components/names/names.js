import { useState } from "react";
import * as React from "react";
import {
  Card,
  CardContent,
  Divider,
  TextField,
  Chip,
  Grid,
  Tooltip,
  Snackbar,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MuiAlert from "@mui/material/Alert";

let pressed = [];

export const FeatureName = (props) => {
  const [value, setValue] = useState("");
  const [feature, setFeature] = useState("");
  const [sql, setSql] = useState("");
  const [commit, setCommit] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);
  const [pageType, setPageType] = useState("express");

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleChange = (event) => {
    pressed.push(1);

    setValue(event.target.value);

    setTimeout(() => {
      pressed.length = pressed.length - 1;

      if (pressed.length === 0) {
        getNames(event.target.value);
      }
    }, 500);
  };

  const handleTypeChange = (event) => {
    setPageType(event.target.value);
  };

  const getNames = async (value) => {
    setError("");

    const id = parseInt(value, 10);

    if (id > 0) {
      value = await getJiraTaskName(id);
    } else if (value.includes("browse")) {
      value = await getJiraTaskName(getIdFromUrl(value));
    }

    if (value) {
      featureName(value);
      sqlName(value);
      commitName(value);
    } else {
      setFeature("-");
      setCommit("-");
      setSql("-");
    }
  };

  const getIdFromUrl = (url) => {
    url = url.replace("https://northernandshell.atlassian.net/browse/", "");
    url = url.split("-");

    return parseInt(url[1], 10);
  };

  const getJiraTaskName = async (id, type) => {
    setLoading(true);

    console.log("gkk pageType", pageType);

    return await fetch(
      `http://helpers-server.grzegorz.warsaw.netro42.com/get-issue.php?issue=${id}&type=${pageType}`
    )
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setLoading(false);

        data = JSON.parse(data);

        if (data.issue) {
          return `${data.issue.key} ${data.issue.title}`;
        } else if (data.error) {
          setFeature("-");
          setCommit("-");
          setSql("-");
          setError(data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const featureName = (v) => {
    v = v.trim();

    let taskNumber = v.split(" ");
    taskNumber = taskNumber[0];

    let name = "";

    name = v.replaceAll(taskNumber, "");
    name = name.replace("1  Give feedback", " ");
    name = name.replace("Give feedback", " ");
    name = name.toLowerCase();

    name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    name = name.replaceAll("=", "-");
    name = name.replace(/\.$/, "");
    name = name.replaceAll("-", " ");
    name = name.replaceAll("/", " ");
    name = name.replaceAll(".", " ");
    name = name.replace(/[^a-zA-Z0-9 ]/g, "");

    name = name.replaceAll("    ", " ");
    name = name.replaceAll("   ", " ");
    name = name.replaceAll("  ", " ");
    name = name.replaceAll(" ", "-");

    name = `${taskNumber}${name}`;

    setFeature(name);

    return name;
  };

  const sqlName = (v) => {
    let name = featureName(v);

    const date = new Date().toISOString().split("T")[0];

    setSql(`${date}_${name}.sql`);
  };

  const commitName = (v) => {
    v = v.trim();

    let taskNumber = v.split(" ");
    taskNumber = taskNumber[0];
    taskNumber = taskNumber.trim();

    let name = v;
    name = name.replaceAll(taskNumber, "");
    name = name.replace(/\.$/, "");
    name = name.replace("1  Give feedback", " ");
    name = name.replace("Give feedback", " ");
    name = name.trim();

    setCommit(`[${taskNumber}] ${name}.`);
  };

  const handleCopy = (type) => {
    setOpen(true);

    const copyText = document.getElementById(type);

    const textArea = document.createElement("textarea");
    textArea.value = copyText.innerText;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }

    document.body.removeChild(textArea);

    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const copyIconStyle = {
    "&:hover": {
      color: "rgb(33, 150, 243)",
      cursor: "pointer",
    },
  };

  const CopyIcon = (props) => {
    if (feature === "" || feature === "-") {
      return "";
    }

    return (
      <Tooltip title="Copy">
        <ContentCopyIcon
          className="copy"
          onClick={() => {
            handleCopy(props.type);
          }}
          sx={copyIconStyle}
        />
      </Tooltip>
    );
  };

  return (
    <form {...props}>
      <Card>
        <CardContent>
          {loading ? (
            <CircularProgress
              color="info"
              style={{
                float: "right",
                margin: "0 9px -50px 0",
                position: "relative",
                top: "23px",
              }}
            />
          ) : (
            ""
          )}
          <TextField
            fullWidth
            label="Task title/number/URL"
            margin="normal"
            name="name"
            onChange={handleChange}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            type="text"
            value={value}
            variant="outlined"
            color="info"
            focused
          />

          <RadioGroup row name="type" defaultValue="express">
            <FormControlLabel
              value="express"
              control={<Radio color="info" />}
              label="express.co.uk"
              onChange={handleTypeChange}
            />
            <FormControlLabel
              value="fryderyk"
              control={<Radio color="info" />}
              label="fryderyk"
              onChange={handleTypeChange}
            />
          </RadioGroup>

          {error ? <Alert severity="error">{error}</Alert> : ""}
        </CardContent>

        <Divider>
          <Chip label="Feature Name" />
        </Divider>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item>
              <p id="feature">{feature}</p>
            </Grid>
            <Grid item>
              <CopyIcon type="feature" />
            </Grid>
          </Grid>
        </CardContent>

        <Divider>
          <Chip label="Commit Name" />
        </Divider>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item>
              <p id="commit">{commit}</p>
            </Grid>
            <Grid item>
              <CopyIcon type="commit" />
            </Grid>
          </Grid>
        </CardContent>

        <Divider>
          <Chip label="SQL Name" />
        </Divider>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item>
              <p id="sql">{sql}</p>
            </Grid>
            <Grid item>
              <CopyIcon type="sql" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Snackbar open={open}>
        <Alert severity="info" sx={{ width: "100%" }}>
          Copied!
        </Alert>
      </Snackbar>
    </form>
  );
};
