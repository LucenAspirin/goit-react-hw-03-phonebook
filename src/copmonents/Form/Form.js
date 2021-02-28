import React from "react";
import s from "./Form.module.css";

class Form extends React.Component {
  state = {
    name: "",
    number: "",
  };

  changeInput = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.mainForm} onSubmit={this.addContact}>
        <label className={s.name}>
          Name{" "}
          <input
            className={s.inputName}
            name="name"
            type="text"
            value={name}
            onChange={this.changeInput}
          />
        </label>
        <label className={s.number}>
          Number{" "}
          <input
            className={s.inputNumber}
            name="number"
            type="text"
            value={number}
            onChange={this.changeInput}
          />
        </label>
        <br></br>
        <button className={s.addContact} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default Form;
