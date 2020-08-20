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
      p1_q3_a: "",
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
      previousp1_q2: "last year's text Q3",
      previousp1_q3: "last year's text Q3",
      previousp1_q4: "last year's text Q4",
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
        <div className="part" id={`2020-03-c-01`}>
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
            <fieldset id="2020-03-c-01-01">
              <label className="question">1. Does your state provide presumptive eligibility, allowing children who are presumed to be eligible to access CHIP services?</label>
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
                        label="What percent of children are presumptively enrolled in CHIP pending a full eligibility determination?"
                        multiline
                        name="p1_q1_a"
                        value={this.state.p1_q1_a}
                        onChange={this.changeText}
                      />
                      <TextField
                        label="Of the children who are presumptively enrolled, what percent are determined fully eligible and enrolled in the program?"
                        multiline
                        name="p1_q1_b"
                        value={this.state.p1_q1_b}
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
                <Choice
                  name="p1_q1"
                  type="radio"
                  value="na"
                  defaultChecked={this.props.previousEntry === "true" && this.state.previousp1_q1 === "no" ? true : false}
                  onChange={this.setConditional}
                >
                  N/A
                  </Choice>
              </div>
            </fieldset>
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
            <fieldset id="2020-03-c-01-02">
              <label className="ds-c-label">2. In an effort to retain more children in CHIP, do you conduct follow-up communication with families through caseworkers and outreach workers?</label>
              <Choice
                name="p1_q2"
                type="radio"
                value="yes"
                defaultChecked={this.props.previousEntry === "true" && this.state.previous_p1_q2 === "yes" ? true : false}
                onChange={this.setConditional}
              >
                Yes
                </Choice>
              <Choice
                name="p1_q2"
                type="radio"
                value="no"
                defaultChecked={this.props.previousEntry === "true" && this.state.previous_p1_q2 === "no" ? true : false}
                onChange={this.setConditional}
              >
                No
                </Choice>
            </fieldset>
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
            <fieldset id="2020-03-c-01-03">
              <label className="ds-c-label">3. Do you send renewal reminder notices to families?</label>
              <Choice
                name="p1_q3"
                type="radio"
                value="yes"
                defaultChecked={this.props.previousEntry === "true" && this.state.previous_p1_q3 === "yes" ? true : false}
                onChange={this.setConditional}
                checkedChildren={
                  <div className="ds-c-choice__checkedChild">
                    <TextField
                      id="2020-03-c-01-03-a"
                      label="a. How many notices do you send to families before disenrolling a child from the program?"
                      labelClassName="p1_q2_a"
                      name="p1_q2_a"
                      value={this.state.p1_q2_a}
                      onChange={this.changeText}
                      size="small"
                      numeric
                    />
                    <TextField
                      id="2020-03-c-01-03-b"
                      label="b. How many days before the end of the eligibility period did you send reminder notices to families?"
                      labelClassName="p1_q2_b"
                      name="p1_q2_b"
                      value={this.state.p1_q2_b}
                      onChange={this.changeText}
                      size="small"
                      numeric
                    />
                  </div>}
              >
                Yes
                </Choice>
              <Choice
                name="p1_q3"
                type="radio"
                value="no"
                defaultChecked={this.props.previousEntry === "true" && this.state.previous_p1_q3 === "no" ? true : false}
                onChange={this.setConditional}
              >
                No
              </Choice>
            </fieldset>
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
            <TextField
              id="2020-03-c-01-04"
              label="4. What else have you done to simplify the eligibility renewal process for families in order to increase retention?"
              multiline
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
            <TextField
              id="2020-03-c-01-05"
              label="5. Which retention strategies have you found to be most effective?"
              multiline
              name="p1_q5"
              value={this.state.p1_q5}
              onChange={this.changeText}
            />
          </div>
          <div className="question-container">
            {this.props.previousYear === "false" &&
              <FillForm
                name="p1_q6"
                title={this.state.fillFormTitle}
                onClick={this.loadAnswers}
                type="textField"
              />
            }
            <TextField
              id="2020-03-c-01-06"
              label="6. How do you measure the effectiveness of your retention strategies? What data sources and methodology do you use to track retention?"
              multiline
              name="p1_q6"
              value={this.state.p1_q6}
              onChange={this.changeText}
            />
          </div>
          <div className="question-container">
            {this.props.previousYear === "false" &&
              <FillForm
                name="p1_q7"
                title={this.state.fillFormTitle}
                onClick={this.loadAnswers}
                type="textField"
              />
            }
            <TextField
              id="2020-03-c-01-07"
              label="7. Anything else you’d like to add that wasn’t already covered?"
              multiline
              name="p1_q7"
              value={this.state.p1_q7}
              onChange={this.changeText}
            />
          </div>
        </div>

        <div className="part" id={`2020-03-c-02`}>
          <h3 className="part__header">Part 2: Eligibility Denials for First-time Applicants (Not Redetermination)</h3>
          <div className="question-container">
            {this.props.previousYear === "false" &&
              <FillForm
                name="p2_1"
                title={this.state.fillFormTitle}
                onClick={this.loadAnswers}
                type="textField"
              />
            }
            <TextField
              hint="This only applies to denials for first-time CHIP applicants—don’t include applicants being considered for redetermination."
              label="1. How many first-time applicants were denied CHIP coverage in the last federal fiscal year? "
              labelClassName="p2_q1"
              name="p2_q1"
              value={this.state.p2_q1}
              onChange={this.changeText}
              size="small"
              numeric
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
              id="2020-03-c-02-03"
              hint="For example: They were denied because of an incomplete application, missing documentation, or a missing enrollment fee."
              label="2. How many first-time applicants were denied CHIP coverage for procedural reasons?"
              labelClassName="p2_q2"
              name="p2_q2"
              value={this.state.p2_q2}
              onChange={this.changeText}
              size="small"
              numeric
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
              id="2020-03-c-02-03"
              hint="For example: They were denied because their income was too high or too low, they were determined eligible for Medicaid instead, or they had other coverage available."
              label="3. How many first-time applicants were denied CHIP coverage for eligibility reasons?"
              labelClassName="p2_q3"
              name="p2_q3"
              value={this.state.p2_q3}
              onChange={this.changeText}
              size="small"
              numeric
            />
          </div>
          <div className="question-container">
            {this.props.previousYear === "false" &&
              <FillForm
                name="p2_q3_a"
                title={this.state.fillFormTitle}
                onClick={this.loadAnswers}
                type="textField"
              />
            }
            <TextField
              id="2020-03-c-02-03-a"
              label="a. How many first-time applicants were denied CHIP coverage and determined eligible for Medicaid (Title XIX) instead?"
              labelClassName="p2_q3_a"
              className="subquestion"
              name="p2_q3_a"
              value={this.state.p2_q3_a}
              onChange={this.changeText}
              size="small"
              numeric
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
              id="2020-03-c-02-04"
              label="4. How many applicants were denied CHIP coverage for other reasons?"
              labelClassName="p2_q4"
              name="p2_q4"
              value={this.state.p2_q4}
              onChange={this.changeText}
              size="small"
              numeric
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
              id="2020-03-c-02-05"
              label="5. Did you have any limitations in collecting this data?"
              labelClassName="p2_q5"
              name="p2_q5"
              value={this.state.p2_q5}
              onChange={this.changeText}
              multiline
            />
          </div>
        </div>

        <div className="part" id={"2021-03-c-03"}>
          <h3 className="part__header">Part 3: Eligibility for Redetermination in CHIP</h3>
          <div className="part__description">
            <p>Redetermination is the process of redetermining whether a child is eligible to renew in CHIP every 12 months, assuming children haven’t already aged out of the program. Families must resubmit their income each year to determine if they still qualify for the program.</p>
          </div>
          <TextField id={`2020-03-c-03-01`} label={`1. How many children were eligible for redetermination in CHIP in the last federal fiscal year?`} size="small" numeric />
          <TextField id={`2020-03-c-03-02`} label={`2. Of the eligible children, how many were then screened for redetermination?`} size="small" numeric />
          <TextField id={`2020-03-c-03-03`} label={`3. How many children were retained in CHIP after the redetermination process?`} size="small" numeric />
          <TextField id={`2020-03-c-03-04`} label={`4. How many children were disenrolled in CHIP after the redetermination process?`} size="small" hint="This number should be equal to the total of 4a, 4b, and 4c below." numeric disabled />
          <fieldset>
            <TextField id={`2020-03-c-03-04-a`} label={`a. How many children were disenrolled for procedural reasons?`} size="small" numeric className="subquestion" />
            <TextField id={`2020-03-c-03-04-b`} label={`b. How many children were disenrolled for eligibility reasons?`} size="small" numeric className="subquestion" />
            <TextField id={`2020-03-c-03-04-c`} label={`c. How many children were disenrolled for other reasons?`} size="small" numeric className="subquestion" />
          </fieldset>
          <TextField id={`2020-03-c-03-05`} label={`5. Did you have any limitations in collecting this data?`} multiline />
          <fieldset>
            <legend>Table: Enrollment Data for CHIP Redetermination</legend>
            <table class="ds-c-table ds-u-margin-top--2" id="synthesized-table-2">
              <caption class="ds-c-table__caption">The tables are auto-populated with the data you entered above.</caption>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Number</th>
                  <th scope="col">Percent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Children screened for redetermination</th>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Children retained after redetermination</th>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Children disenrolled after redetermination</th>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </fieldset>
          <fieldset>
            <legend>Disenrollment Data for CHIP Redetermination</legend>
            <table class="ds-c-table ds-u-margin-top--2" id="synthesized-table-3">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Number</th>
                  <th scope="col">Percent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Children disenrolled after redeterminationn</th>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Children disenrolled for procedural reasons</th>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Children disenrolled for eligibility reasons</th>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Children disenrolled for other reasons</th>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </div>

        <div className="part" id={"2021-03-c-04"}>
          <h3 className="part__header">Part 4: Tracking a CHIP cohort over 18 months</h3>
          <div className="part__description">
            <p>Tracking a cohort of children enrolled in CHIP (Title XXI) will measure how long a specific group stays enrolled over a 18-month period. This information is required by Section 402(a) of CHIPRA. To track your cohort, identify a group of children ages 0 to 17 years who are newly enrolled in CHIP (Medicaid Expansion CHIP, Separate CHIP, or both) as of the first three months (Jan-Mar) of the last federal fiscal year.</p>
            <p>Children must be 16.5 years or younger when they enroll to ensure they don’t age out of the program by the end of the 18-month tracking period.</p>
            <p>If your eligibility system doesn’t have the ability to track a cohort, you may need to use a unique identifier or flag to track each child over the 18-month period.</p>
          </div>
          <Checkbox text="I don’t have data for the individual age groups. I’ll report data for the total number for all age groups (0-18 years) instead." />
          <fieldset>
            <legend className="part__legend">January - March 2020 (start of the cohort)</legend>
            <InputGrid
              id={`2021-03-c-04-01`}
              label="1. How many children were newly enrolled in CHIP between January and March?"
              hint="Only include children that weren’t enrolled in CHIP the previous month. (For example: Children who enrolled in January 2020 are “newly enrolled” if they weren’t enrolled in the CHIP in December 2019.)"
            />
          </fieldset>
          <fieldset>
            <legend className="part__legend">July - September 2020 (6 months later)</legend>
            <InputGrid
              id={`2021-03-c-04-02`}
              label="2. How many children were still continuously enrolled in CHIP six months later?"
              hint="Only include children that didn’t have a break in coverage during the six-month period."
            />
            <InputGrid
              id={`2021-03-c-04-03`}
              label="3. How many children had a break in CHIP coverage but were re-enrolled in CHIP six months later?"
              hint=""
            />
            <InputGrid
              id={`2021-03-c-04-03-a`}
              label="a. How many children had a break in CHIP coverage but were re-enrolled in CHIP six months later, and enrolled in Medicaid during the break?"
              hint=""
              subquestion
            />
            <InputGrid
              id={`2021-03-c-04-04`}
              label="4. How many children were no longer enrolled in CHIP six months later?"
              helpDrawer
            />
            <InputGrid
              id={`2021-03-c-04-04-a`}
              label="a. How many children were no longer enrolled in CHIP but were enrolled in Medicaid six months later?"
              hint=""
              subquestion
            />
            <TextField id={`2021-03-c-04-05`} label="5. Anything else you’d like to add about your data?" multiline />
          </fieldset>

          <fieldset className="disabled" disabled>
            <legend className="part__legend">January - March 2021 (12 months later)</legend>
            <p className="ds-c-field__hint ds-u-margin-top--4">Next year you’ll submit the rest of your data at 12 months and 18 months later of tracking your cohort</p>
            <InputGrid
              id={`2021-03-c-04-06`}
              label="6. How many children were still continuously enrolled in CHIP 12 months later?"
              hint="Only include children that didn’t have a break in coverage during the 12-month period."
            />
            <InputGrid
              id={`2021-03-c-04-07`}
              label="7. How many children had a break in CHIP coverage but were re-enrolled in CHIP 12 months later?"
              hint=""
            />
            <InputGrid
              id={`2021-03-c-04-07-a`}
              label="a. How many children had a break in CHIP coverage but were re-enrolled in CHIP 12 months later, and enrolled in Medicaid during this break?"
              hint=""
              subquestion
            />
            <InputGrid
              id={`2021-03-c-04-08`}
              label="8. How many children were no longer enrolled in CHIP 12 months later?"
              helpDrawer
            />
            <InputGrid
              id={`2021-03-c-04-08-a`}
              label="a. How many children were no longer enrolled in CHIP but were enrolled in Medicaid 12 months later?"
              hint=""
              subquestion
            />
          </fieldset>

          <fieldset className="disabled" disabled>
            <legend className="part__legend">
              July - September of 2021 (18 months later)
              </legend>
            <InputGrid
              id={`2021-03-c-04-09`}
              label="9. How many children were still continuously enrolled in CHIP 18 months later?"
              hint="Only include children that didn’t have a break in coverage throughout the 18-month period."
            />
            <InputGrid
              id={`2020-03-c-04-10`}
              label="10. How many children had a break in CHIP coverage but were re-enrolled in CHIP 18 months later?"
              hint=""
            />
            <InputGrid
              id={`2020-03-c-04-10-a`}
              label="a. How many children had a break in CHIP coverage but were enrolled in CHIP 18 months later, and enrolled in Medicaid during the break?"
              hint=""
              subquestion
            />
            <InputGrid
              id={`2020-03-c-04-11`}
              label="11. How many children were no longer enrolled in CHIP 18 months later?"
              helpDrawer
            />
            <InputGrid
              id={`2020-03-c-04-11-a`}
              label="a. How many children were no longer enrolled in CHIP but were enrolled in Medicaid 18 months later?"
              hint=""
              subquestion
            />
            <TextField id={`2021-03-c-04-07`} label={`12. Anything else you’d like to add about your data?`} multiline />
          </fieldset>


          <SynthesizedTable
            type="synthesized"
            title="Your summarized data"
            hint="This table is auto-populated with your answers in Part 4 above." />
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
