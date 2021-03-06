import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Torahack from "../assets/img/torahack.png"
import NoProfile from "../assets/img/no-profile.png";
// import ListItemText from "@material-ui/core/ListItemText";
// import Typography from "@material-ui/core/Typography";

const Chat = (props) => {

  // 三項演算子：　props.typeがquestionならtrueになる
const isQuestion = (props.type === 'question');
const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";


return (
  <ListItem className={classes}>
    <ListItemAvatar>
      {isQuestion ? (
        <Avatar alt="icon" src={Torahack} />
      ) : (
        <Avatar alt="icon" src={NoProfile} />
      )}
    </ListItemAvatar>
    <div className="p-chat__bubble">{props.text}</div>
  </ListItem>
);

};

export default Chat;
