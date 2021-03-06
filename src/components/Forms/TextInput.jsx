import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = (props)=> {
  return (
    // https://mui.com/api/text-field/
    <TextField
      fullWidth={true}
      label={props.label}
      margin="dense"
      // 問い合わせ内容は複数行
      multiline={props.multiline}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  )
}

export default TextInput;