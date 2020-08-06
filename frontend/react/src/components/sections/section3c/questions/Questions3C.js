import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField, Choice } from "@cmsgov/design-system-core";
import FillForm from "../../../layout/FillForm";
import { InputGrid } from "../../../fields/InputGrid";
import { SynthesizedTable } from "../../../layout/SynthesizedTable";

class Questions3C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p1_q1: "",
      p1_q1__a: "",
      p1_q1__a_1: "",
      p1_q1__a_2: "",
      p1_q1__b: "",
      p1_q2__a: "",
      p1_q2__b: "",
      p1_q2__c: "",
      p1_q2__d: "",
      p1_q2__e: "",
      p1_q3: "",
      p1_q4: "",
      p1_q5: "",
      p2_q1: "",
      p2_q2: "",
      p2_q3: "",
      p2_q4: "",
      p2_q5: "",
      p2_q6: "",
      previousEntry: this.props.previousEntry,
      previousp1_q1: "yes",
      previousp1_q3: "last year's text Q3",
      previousp1_q4: "last year's text q4",
      previousp1_q5: "last year's text q5",
      previousp2_q1: "last year's text q1",
      previousp2_q2: "last year's text q2",
      previousp2_q3: "last year's text q3",
      previousp2_q4: "last year's text q4",
      previousp2_q5: "last year's text q5",
      previousp2_q6: "last year's text q6",
      fillFormTitle: "Same as last year"
    };
    this.setConditional = this.setConditional.bind(this)
    this.loadAnswers = this.loadAnswers.bind(this)
    this.selectInput = this.selectInput.bind(this)
    this.changeText = this.changeText.bind(this)
  }

  setConditional(el) {
    this.setState({
      [el.target.name]: el.target.value,
    });
  }
  changeText(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  selectInput(id, option, active) {
    let selection = document.getElementById(id).getElementsByTagName("input");

    //clear any selections made by the user
    for (let input of selection) {
      input.checked = false;
    }

    if (active) {
      selection[option].checked = true;
    } else {
      for (let input of selection) {
        input.checked = false;
      }
    }
  }

  loadAnswers(el) {
    el.preventDefault();
    // button title: Undo or Same as Last year
    //el.target.title = this.state.fillFormTitle;

    el.target.classList.toggle("active");

    //This dynamically updates the element with last years response. Need to figure out a way to get all sub elements
    if (el.target.type === "textField") {
      var newstate = {};
      newstate[el.target.id] = el.target.id;
      if (el.target.title === "Undo") {

        this.setState({ [el.target.name]: this.state[el.target.name + 'temp'] })
        el.target.title = "Active";
      }
      else {
        this.setState({ [el.target.name + 'temp']: this.state[el.target.name] })
        this.setState({ [el.target.name]: this.state['previous' + el.target.name] })
        el.target.title = "Undo";
      }

      this.setState(newstate);
    }
  }



  render() {
    return (
      <form>
        <div>
          <h3 className="part-header">
            Part 1: Eligibility Renewal and Retention
            </h3>
          <div className="question-container">
            {this.props.previousYear === "false" &&
              <FillForm
                name="p1_q1"
                title={this.state.fillFormTitle}
                onClick={this.loadAnswers}
                type="textField"
              />
            }
            <div className="question">
              1. Do you have authority in your CHIP state plan to
              provide for presumptive eligibility, and have you
              implemented this?
              </div>
            <div id="p1_q1">
              <Choice
                name="p1_q1"
                type="radio"
                value="yes"
                defaultChecked={this.props.previousEntry === "true" && this.state.previousp1_q1 === "yes" ? true : false}
                onChange={this.setConditional}
                checkedChildren={
                  <div className="ds-c-choice__checkedChild">
                    <TextField
                      label="What percentage of children are presumptively enrolled in CHIP pending a full eligibility determination?"
                      multiline
                      name="p1_q1__a"
                      rows="6"
                      value={this.state.p1_q1__a}
                      onChange={this.changeText}
                    />
                    <TextField
                      hint="Maximum 7,500 characters"
                      label="Of those children who are presumptively enrolled, what percentage are determined fully eligible and enrolled in the program?"
                      multiline
                      name="p1_q1__b"
                      rows="6"
                      value={this.state.p1_q1__b}
                      onChange={this.changeText}
                    />
                  </div>
                }
              >
                Yes
                </Choice>
              <Choice
                name="p1_q1"
                type="radio"
                value="no"
                defaultChecked={this.props.previousEntry === "true" && this.state.previousp1_q1 === "no" ? true : false}
                onChange={this.setConditional}
              >
                No
                </Choice>
            </div>
          </div>
        </div>
        <div className="question-container">
          {this.props.previousYear === "false" &&
            <FillForm
              name="p1_q2"
              title={this.state.fillFormTitle}
              onClick={this.loadAnswers}
              type="textField"
            />
          }

          <div className="question">
            2. Tell us how your state simplifies the eligibility
            renewal process for families in order to retain more
            children in CHIP.
            </div>
          <div className="sub-questions">
            <div id="p1_q2__1">
              <div className="question">a. Do you conduct follow-up communication with families through caseworkers and outreach workers?</div>
              <Choice
                name="p1_q2__1"
                type="radio"
                value="yes"
                defaultChecked={this.props.previousEntry === "true" && this.state.previous_p1_q2__1 === "yes" ? true : false}
                onChange={this.setConditional}
              >
                Yes
                </Choice>
              <Choice
                name="p1_q2__1"
                type="radio"
                value="no"
                defaultChecked={this.props.previousEntry === "true" && this.state.previous_p1_q2__1 === "no" ? true : false}
                onChange={this.setConditional}
              >
                No
                </Choice>
            </div>
            <div id="p1_q2__2">
              <div className="question">b. Do you send renewal reminder notices to all families?</div>
              <Choice
                label=""
                name="p1_q2__2"
                type="radio"
                value="yes"
                defaultChecked={this.props.previousEntry === "true" && this.state.previous_p1_q2__2 === "yes" ? true : false}
                onChange={this.setConditional}
              >
                Yes
                </Choice>
              <Choice
                name="p1_q2__2"
                type="radio"
                value="no"
                defaultChecked={this.props.previousEntry === "true" && this.state.previous_p1_q2__2 === "no" ? true : false}
                onChange={this.setConditional}
              >
                No
                </Choice>
            </div>
            <TextField
              label="c. How many notices do you send to families before disenrolling a child from the program?"
              labelClassName="p1_q2__3"
              name="p1_q2__3"
              value={this.state.p1_q2__3}
              onChange={this.changeText}
            />
            <TextField
              label="d. How many notices do you send to families before disenrolling a child from the program?"
              labelClassName="p1_q2__4"
              name="p1_q2__4"
              value={this.state.p1_q2__4}
              onChange={this.changeText}
            />
            <TextField
              label="e. What else do you do to simplify the eligibility renewal process for families in order to increase retention?"
              labelClassName="p1_q1__5"
              name="p1_q2__5"
              value={this.state.p1_q2__5}
              onChange={this.changeText}
            />
          </div>
        </div>
        <div className="question-container">
          {this.props.previousYear === "false" &&
            <FillForm
              name="p1_q3"
              title={this.state.fillFormTitle}
              onClick={this.loadAnswers}
              type="textField"
            />
          }
          <div className="question">
            3. Which retention strategies have been most effective in
            your state?
            </div>
          <TextField
            hint="Maximum 7,500 characters"
            label=""
            multiline
            rows="6"
            name="p1_q3"
            value={this.state.p1_q3}
            onChange={this.changeText}
            type='textField'
          />
        </div>
        <div className="question-container">
          {this.props.previousYear === "false" &&
            <FillForm
              name="p1_q4"
              title={this.state.fillFormTitle}
              onClick={this.loadAnswers}
              type="textField"
            />
          }
          <div className="question">
            4. How have you evaluated the effectiveness of your
            strategies?
            </div>
          <TextField
            hint="Maximum 7,500 characters"
            label=""
            multiline
            rows="6"
            name="p1_q4"
            value={this.state.p1_q4}
            onChange={this.changeText}
          />
        </div>
        <div className="question-container">
          {this.props.previousYear === "false" &&
            <FillForm
              name="p1_q5"
              title={this.state.fillFormTitle}
              onClick={this.loadAnswers}
              type="textField"
            />
          }
          <div className="question">
            5. What data sources and methodology do you use for
            tracking effectiveness?
            </div>
          <TextField
            hint="Maximum 7,500 characters"
            label=""
            multiline
            rows="6"
            name="p1_q5"
            value={this.state.p1_q5}
            onChange={this.changeText}
          />
        </div>
        <h3 className="part-header">Part 2: Eligibility Data</h3>
        <div className="question-container">
          {this.props.previousYear === "false" &&
            <FillForm
              name="p2_1"
              title={this.state.fillFormTitle}
              onClick={this.loadAnswers}
              type="textField"
            />
          }
          <div className="question">
            A. Denials of Title XXI Coverage in FFY 2019
              <div className="hint">
              Enter your data below and the percentages will be
              automatically calculated in the final report.
              </div>
          </div>
          <TextField
            hint="This only includes denials for Title XXI at the time of initial application, not redetermination"
            label="1. How many applicants were denied Title XXI coverage?"
            labelClassName="p2_q1"
            name="p2_q1"
            value={this.state.p2_q1}
            onChange={this.changeText}
          />
        </div>
        <div className="question-container">
          {this.props.previousYear === "false" &&
            <FillForm
              name="p2_q2"
              title={this.state.fillFormTitle}
              onClick={this.loadAnswers}
              type="textField"
            />
          }
          <TextField
            hint="For example: an incomplete application, missing documentation, missing enrollment fee, etc."
            label="2. How many applications were denied Title XXI coverage for procedural denials?"
            labelClassName="p2_q2"
            name="p2_q2"
            value={this.state.p2_q2}
            onChange={this.changeText}
          />
        </div>
        <div className="question-container">
          {this.props.previousYear === "false" &&
            <FillForm
              name="p2_q3"
              title={this.state.fillFormTitle}
              onClick={this.loadAnswers}
              type="textField"
            />
          }
          <TextField
            hint="For example: income was too high, income was too low, they were determined Medicaid eligible instead, they had other coverage instead, etc."
            label="3. How many applicants were denied Title XXI coverage for eligibility denials?"
            labelClassName="p2_q3"
            name="p2_q3"
            value={this.state.p2_q3}
            onChange={this.changeText}
          />
        </div>
        <div className="question-container">
          {this.props.previousYear === "false" &&
            <FillForm
              name="p2_q4"
              title={this.state.fillFormTitle}
              onClick={this.loadAnswers}
              type="textField"
            />
          }
          <TextField
            label="4. How many applicants were denied Title XXI coverage and determined eligible for Title XIX instead?"
            labelClassName="p2_q4"
            name="p2_q4"
            value={this.state.p2_q4}
            onChange={this.changeText}
          />
        </div>
        <div className="question-container">
          {this.props.previousYear === "false" &&
            <FillForm
              name="p2_q5"
              title={this.state.fillFormTitle}
              onClick={this.loadAnswers}
              type="textField"
            />
          }
          <TextField
            label="5. How many applicants were denied Title XXI coverage for other reasons?"
            labelClassName="p2_q5"
            name="p2_q5"
            value={this.state.p2_q5}
            onChange={this.changeText}
          />
        </div>
        <div className="question-container">
          {this.props.previousYear === "false" &&
            <FillForm
              name="p2_q6"
              title={this.state.fillFormTitle}
              onClick={this.loadAnswers}
              type="textField"
            />
          }
          <TextField
            hint="(Maximum 7,500 characters)"
            label="6. Did you run into any limitations when collecting data? Anything else you'd like to add about this section that wasn't already covered?"
            labelClassName="p2_q6"
            multiline
            name="p2_q6"
            rows="6"
            value={this.state.p2_q6}
            onChange={this.changeText}
          />
        </div>
        <h3 className="part-header">Part 3: Duration Measure of Children Enrolled in Title XIX</h3>
        <InputGrid index="1" title="Total number of children newly enrolled in title XIX in the second quarter of FFY 2018:" />
        <InputGrid index="2" title="Enrollment status 6 months later:" />
        <InputGrid index="3" title="Enrollment status 12 months later:" />
        <InputGrid index="4" title="Enrollment status 18 months later:" />
        <SynthesizedTable type="synthesized" title="(Autocalculated synthesized table)" />
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  year: state.formYear,
});

export default connect(mapStateToProps)(Questions3C);
