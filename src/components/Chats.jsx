import React from 'react';
import {makeStyles, createStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import {Chat} from './index';


const useStyles = makeStyles(() => (
  createStyles({
    "chats":{
      height:400,
      padding: "0",
      // overflowのauto : 400px以上の要素を超えた時にスクロールバーを出す
      overflow: "auto"
    }
  })
));



const Chats = (props) => {

  const classes = useStyles();
  // console.log(props.chats);

  return (
    <List className={classes.chats} id={"scroll-area"}>
    
      {props.chats.map((chat, index) => {
        return <Chat text={chat.text} type={chat.type} key={index.toString()}/>
      })}

    </List>
  );
};

export default Chats;