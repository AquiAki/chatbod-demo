// import React from "react";
import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextInput from "./TextInput"

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
    };
    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
  }

  inputName = (event) => {
    this.setState({ name: event.target.value });
  };

  inputEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  inputDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  // const validateEmailFormat = (email) => {
  //       const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  //       return regex.test(email)
  //   }

  // const validateRequiredInput = (...args) => {
  //       let isBlank = false;
  //       for (let i = 0; i < args.length; i=(i+1)|0) {
  //           if (args[i] === "") {
  //               isBlank = true;
  //           }
  //       }
  //       return isBlank
  //   };



  submitForm = ()=>{
    const name = this.state.name
    const email = this.state.email;
    const description = this.state.description;

    const payload = {
      text: "お問い合わせがありました\n" +
            "お名前: " + name + "\n" +
            "Email" + email + "\n" +
            "問い合わせ内容: \n" + description
    }

    const url =
      "https://hooks.slack.com/services/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";

      fetch(url, {
        method:"POST",
        body: JSON.stringify(payload)
      }).then(()=>{
        alert("送信が完了しました。追ってご連絡します！")
        this.setState({
          name:"",
          email:"",
          description:""
        })
        return this.props.handleClose()
      })

    }

  

  render() {
    return (
      <Dialog
        // openで表示するかどうかを決めている
        open={this.props.open}
        // 上でbindしているから関数を渡せる
        // bindすることでrenderされる度に、関数が作られるということがなくなる⇨パフォーマンスの向上
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
        <DialogContent>
          <TextInput
            label={"お名前(必須)"}
            multiline={false}
            rows={1}
            value={this.state.name}
            type={"text"}
            onChange={this.inputName}
          />

          <TextInput
            label={"メールアドレス(必須)"}
            multiline={false}
            rows={1}
            value={this.state.email}
            type={"email"}
            onChange={this.inputEmail}
          />

          <TextInput
            label={"お問合せ内容(必須)"}
            multiline={true}
            rows={5}
            value={this.state.description}
            type={"text"}
            onChange={this.inputDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose}>キャンセル</Button>
          <Button onClick={this.submitForm} autoFocus>
            送信する
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}