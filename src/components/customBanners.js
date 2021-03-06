import React, { Component } from "react";

class CustomBanners extends Component {
  render() {
    return (
      <div
        className={"item knowledge " + this.props.dataTitle}
        data-header={this.props.dataHeader}
        data-title={this.props.dataTitle}
        data-year={this.props.dataYear}
        style={{ backgroundColor: this.props.dataColor }}
      >
        <div className="item-content">
          <div className="header">{this.props.dataHeader}</div>
          <div className="year">{this.props.dataYear}</div>
        </div>
      </div>
    );
  }
}

export default CustomBanners;
