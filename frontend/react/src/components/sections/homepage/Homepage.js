import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import ReportItem from "./ReportItem";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: "",
    };
  }
  render() {
    return (
      <div className="homepage">
        <div className="ds-l-container">
          <div className="ds-l-row ds-u-padding-left--2">
            <h1 className="ds-u-margin-bottom--0">CHIP Annual Report Template System (CARTS)</h1>
          </div>
          <div className="ds-l-row ds-u-margin-bottom--2">
            <div className="ds-l-col--12">
              <p className="ds-u-margin-bottom--2">Welcome to CARTS! We’ve incorporated feedback from several states to bring you a better CARTS experience. Contact <a href="mailto:CARTSHELP@cms.hhs.gov?subject=CARTS Help request">CARTSHELP@cms.hhs.gov</a> with any questions.
</p>
            </div>
            <legend className="ds-u-padding--2 ds-h3">All Reports</legend>
          </div>
          <div className="ds-l-row">
            <div className="reports ds-l-col--12">
              <div className="carts-report preview__grid">
                <div className="report-header ds-l-row">
                  <div className="name ds-l-col--3">Year</div>
                  <div className="status ds-l-col--3">Status</div>
                  <div className="last-edited ds-l-col--3">Last Edited</div>
                  <div className="actions ds-l-col--3">Actions</div>
                </div>

                <ReportItem
                  name="2020"
                  lastEditedTime="1:32pm"
                  lastEditedDate="9/21/20"
                  link1URL="/basic-info"
                  link1Text="Edit"
                  statusText="Draft"
                />

                <ReportItem
                  name="2019"
                  lastEditedTime="7:32am"
                  lastEditedDate="3/20/20"
                  link1URL="/reports/ny/2019"
                  link2URL="#"
                  statusText="Under review"
                />

                <ReportItem
                  name="2018"
                  lastEditedTime="5:43pm"
                  lastEditedDate="1/26/19"
                  link1URL="/reports/ny/2018"
                  link2URL="#"
                  statusURL="#"
                />

                <ReportItem
                  name="2017"
                  lastEditedTime="5:00am"
                  lastEditedDate="2/13/18"
                  link1URL="/reports/ny/2017"
                  link2URL="#"
                  statusURL="#"
                />

                <ReportItem
                  name="2016"
                  lastEditedTime="9:13pm"
                  lastEditedDate="3/20/17"
                  link1URL="/reports/ny/2016"
                  link2URL="#"
                  statusURL="#"
                />

                <ReportItem
                  name="2015"
                  lastEditedTime="9:00am"
                  lastEditedDate="1/20/16"
                  link1URL="/reports/ny/2015"
                  link2URL="#"
                  statusURL="#"
                />

                <ReportItem
                  name="2014"
                  lastEditedTime="4:44pm"
                  lastEditedDate="3/20/15"
                  link1URL="/reports/ny/2014"
                  link2URL="#"
                  statusURL="#"
                />

                <ReportItem
                  name="2013"
                  lastEditedTime="5:05am"
                  lastEditedDate="3/24/14"
                  link1URL="/reports/ny/2013"
                  link2URL="#"
                  statusURL="#"
                />

                <ReportItem
                  name="2012"
                  lastEditedTime="9:00am"
                  lastEditedDate="2/02/13"
                  link1URL="/reports/ny/2012"
                  link2URL="#"
                  statusURL="#"
                />

                <ReportItem
                  name="2011"
                  lastEditedTime="11:30am"
                  lastEditedDate="3/20/12"
                  link1URL="/reports/ny/2011"
                  link2URL="#"
                  statusURL="#"
                />
              </div>
            </div>
            <div className="ds-l-row reports-footer">
              <div className="displaying ds-l-col--6">
                Showing <span className="count">1</span> to{" "}
                <span className="count">10</span> of{" "}
                <strong>24 documents</strong>
              </div>
              <div className="pager ds-l-col--6">
                Page <span className="number-primary">1</span> ...{" "}
                <span className="number-outline">2</span>
              </div>
            </div>
          </div>
          <div className="ds-l-row">
            <div className="omb-info ds-l-col--12">
              <p>
                The OMB control number for this information is OMB 0938-1148.
                The time required to complete this information collection is
                estimated to 40 hours per response, including the time to review
                instructions, search existing data resources, gather data, and
                review and submit the information.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
