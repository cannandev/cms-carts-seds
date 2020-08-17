import React from "react"

export const SynthesizedTable = props => {
  return (
    <div className="synthesized-table ds-l-container ds-u-padding-top--2">
      <table class="ds-c-table ds-u-margin-top--2">
        <caption class="ds-c-table__caption">{props.title}</caption>
        <thead>
          <tr>
            <th scope="col">All children ages 0-18</th>
            <th scope="col">Number</th>
            <th scope="col">Percent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Total number of children newly enrolled in title XIX in the second quarter of FFY 2020</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Enrollment status 6 months later</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Enrollment status 12 months later</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Enrollment status 18 months later</th>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}