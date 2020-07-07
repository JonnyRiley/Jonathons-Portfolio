import React from "react";
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }
  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mdowlpyj"
        method="POST"
      >
        <label className="text-light">Email:</label>
        <InputGroup>
          {" "}
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="nc-icon nc-single-02" />
            </InputGroupText>
          </InputGroupAddon>{" "}
          <Input type="email" name="email" placeholder="email" />
        </InputGroup>
        <label className="text-light">Message:</label>

        <InputGroup>
          {" "}
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="nc-icon nc-email-85" />
            </InputGroupText>
          </InputGroupAddon>{" "}
          <Input type="text" name="message" placeholder="message" />
        </InputGroup>
        <br></br>
        <div className="col text-center">
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <Button className="btn-round" outline color="neutral" size="lg">
              Send Message{" "}
            </Button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
      </form>
      // <form
      //   onSubmit={this.submitForm}
      //   action="https://formspree.io/mdowlpyj"
      //   method="POST"
      // >
      //   <Row>
      //     <Col>
      //       <label className="text-light">Email:</label>
      //       <InputGroup>
      //         <InputGroupAddon addonType="prepend">
      //           <InputGroupText>
      //             <i className="nc-icon nc-single-02" />
      //           </InputGroupText>
      //         </InputGroupAddon>
      //         <Input placeholder="email" type="email" />
      //       </InputGroup>
      //     </Col>

      //     <Col>
      //       <label className="text-light">Message:</label>
      //       <InputGroup>
      //         <InputGroupAddon addonType="prepend">
      //           <InputGroupText>
      //             <i className="nc-icon nc-single-02" />
      //           </InputGroupText>
      //         </InputGroupAddon>
      //         <Input placeholder="message" type="text" />
      //       </InputGroup>
      //     </Col>
      //   </Row>

      //   <br></br>
      //   {/* <Col className="ml-auto mr-auto" md="8"> */}
      //   <div className="col text-center">
      //     {status === "SUCCESS" ? (
      //       <p>Thanks!</p>
      //     ) : (
      //       <Button className="btn-round" outline color="neutral" size="lg">
      //         Send Message
      //       </Button>
      //     )}
      //     {status === "ERROR" && <p>Ooops! There was an error.</p>}
      //   </div>
      //   {/* </Col> */}
      // </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        console.error();

        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
