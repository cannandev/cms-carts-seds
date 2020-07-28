import React, { Component } from "react";

class ReportItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let link1Text = this.props.link1Text ? this.props.link1Text : "View";
    let link1URL = this.props.link1URL ? this.props.link1URL : "#";
    let link2Text = this.props.link2Text ? this.props.link2Text : "Uncertify";
    let link2URL = this.props.link2URL ? this.props.link2URL : "#xxxx";
    let statusText = this.props.statusText
      ? this.props.statusText
      : "Posted on Medicaid.gov";

    let statusURL = this.props.statusURL ? (
      <a href={this.props.statusURL}> {statusText} </a>
    ) : (
      statusText
    );

    let anchorTarget = this.props.link1Text === "Edit" ? "_self" : "_blank";

    let windowLocation;
    return (
      <div className="report-item ds-l-row">
        <div className="name ds-l-col">{this.props.name}</div>
        <div className="status ds-l-col">{statusURL}</div>
        <div className="last-edited ds-l-col">
          {this.props.lastEditedTime}|{this.props.lastEditedDate}{" "}
        </div>
        <div className="actions ds-l-col">
          <a href={link1URL} target={anchorTarget}>
            {link1Text}
          </a>{" "}
          | <a href={link2URL}>{link2Text}</a>
        </div>
      </div>
    );
  }
}

export default ReportItem;