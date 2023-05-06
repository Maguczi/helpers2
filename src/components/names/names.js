import { useState } from "react";
import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Chip,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import MuiAlert from "@mui/material/Alert";

let pressed = [];

export const FeatureName = (props) => {
  const [value, setValue] = useState("");
  const [feature, setFeature] = useState("");
  const [sql, setSql] = useState("");
  const [commit, setCommit] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleChange = (event) => {
    pressed.push(1);

    setValue(event.target.value);

    setTimeout(() => {
      pressed.length = pressed.length - 1;

      if (pressed.length === 0) {
        names(event.target.value);
      }
    }, 500);
  };

  const getJiraTaskName = async (id) => {
    setLoading(true);

    return await fetch(
      `http://helpers-server.grzegorz.warsaw.netro42.com/get-issue.php?issue=${id}`
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

  const names = async (v) => {
    setError("");
    const id = parseInt(v, 10);

    if (id > 0) {
      v = await getJiraTaskName(id);
    }

    if (v) {
      featureName(v);
      sqlName(v);
      commitName(v);
    } else {
      setFeature("-");
      setCommit("-");
      setSql("-");
    }
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

    let name = v;
    name = name.replaceAll(taskNumber, "");
    name = name.replace(/\.$/, "");
    name = name.replace("1  Give feedback", " ");
    name = name.replace("Give feedback", " ");

    setCommit(`[${taskNumber}] ${name}.`);
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
            label="Task title/number"
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
          {error ? <Alert severity="error">{error}</Alert> : ""}
        </CardContent>

        <Divider>
          <Chip label="Feature Name" />
        </Divider>
        <CardContent>
          <p>{feature}</p>
        </CardContent>

        <Divider>
          <Chip label="Commit Name" />
        </Divider>
        <CardContent>
          <p>{commit}</p>
        </CardContent>

        <Divider>
          <Chip label="SQL Name" />
        </Divider>
        <CardContent>
          <p>{sql}</p>
        </CardContent>
      </Card>
    </form>
  );
};
