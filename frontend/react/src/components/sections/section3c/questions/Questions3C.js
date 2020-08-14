import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField, Choice } from "@cmsgov/design-system-core";
import FillForm from "../../../layout/FillForm";
import { InputGrid } from "../../../fields/InputGrid";
import { SynthesizedTable } from "../../../layout/SynthesizedTable";
import { Checkbox } from "../../../fields/Checkbox";

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
        <h3 className="part-header">Part 3: Eligibility for Redetermination in CHIP</h3>

        <div className="part" id={"2020-03-c-04"}>
          <h3 className="part__header">Part 4: Tracking a CHIP cohort over 18 months</h3>
          <div className="part__description">
            <p>Tracking a cohort of children enrolled in CHIP (Title XXI) will measure how long a specific group stays enrolled over a 18-month period. This information is required by Section 402(a) of CHIPRA. To track your cohort, identify a group of children ages 0 to 17 years who are newly enrolled in CHIP (Medicaid Expansion CHIP, Separate CHIP, or both) as of the first three months (Jan-Mar) of the last federal fiscal year.</p>
            <p>Children must be 16.5 years or younger when they enroll to ensure they don’t age out of the program by the end of the 18-month tracking period.</p>
            <p>If your eligibility system doesn’t have the ability to track a cohort, you may need to use a unique identifier or flag to track each child over the 18-month period.</p>
          </div>
          <Checkbox text="I don’t have data for the individual age groups. I’ll report data for the total number for all age groups (0-18 years) instead." />
          <InputGrid
            id={`2020-03-c-04-01`}
            title="January - March 2019 (start of the cohort)"
            label="How many children were newly enrolled in CHIP between January and March of the last federal fiscal year?"
            hint="Only include children that weren’t enrolled in CHIP the previous month. (For example: Children who enrolled in January 2020 are “newly enrolled” if they weren’t enrolled in the CHIP in December 2019.)"
          />
          <InputGrid

            id={`2020-03-c-04-02`}
            title="July - September 2019 (6 months later)"
            label="How many children were still continuously enrolled in CHIP six months later?"
            hint="Only include children that didn’t have a break in coverage during the six-month period."
          />
          <InputGrid
            id={`2020-03-c-04-03`}
            title="January - March 2020 (12 months later)"
            label="How many children had a break in CHIP coverage but were re-enrolled in CHIP six months later?"
            hint=""
          />
          <InputGrid
            id={`2020-03-c-04-04`}
            title=""
            label="How many children had a break in CHIP coverage but were re-enolled in CHIP six months later, and were enrolled in Medicaid during the break?"
            hint=""
          />
          <InputGrid
            id={`2020-03-c-04-05`}
            title="July - September of 2020 (18 months later)"
            label="How many children were no longer enrolled in CHIP six months later?"
            hint="Possible reasons for no longer being enrolled: \nTransferred to another health insurance program other than CHIP
            \nDidn’t meet eligibility criteria anymore
            \nDidn’t complete documentation
            \nDidn’t pay a premium or enrollment fee"
          />
          <InputGrid
            id={`2020-03-c-04-06`}
            title=""
            label="How many children were no longer enrolled in CHIP but were enrolled in Medicaid six months later?"
            hint=""
          />

          <TextField id={`2020-03-c-04-07`} label={`${`7`}. Anything else you'd like to add about your data?`} multiline />

          <SynthesizedTable type="synthesized" title="(Autocalculated synthesized table)" />
        </div>
      </form >
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  year: state.formYear,
});

export default connect(mapStateToProps)(Questions3C);
