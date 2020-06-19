import React from "react";
import Axios from "axios";

class ImportData extends React.Component {
  state = {
    inputKey: Date.now(),
    uploading: false,
    progress: 0,
    errors: [],
  };

  handleChange = (files) => {
    const formData = new FormData();
    formData.append("photo", files[0]);

    this.setState({
      ...this.state,
      uploading: true,
      progress: 0,
      errors: [],
    });

    this.props.setValue("");
    const url = "http://www.lamacetita.com:8000/api/products/upload";
    Axios.post(url, formData, {
      onUploadProgress: (ProgressEvent) => {
        this.setState({
          ...this.state,
          progress: parseInt((ProgressEvent.loaded / ProgressEvent.total) * 100),
        });
      },
    }).then((res) => {
      setTimeout(() => {
        if (res.status != 200) {
          this.setState({
            ...this.state,
            uploading: true,
            progress: 0,
            errors: res.data.errors,
          });
        } else {
          console.log({ res });
          this.props.setValue(res.data.data);
        }
        this.setState({
          ...this.state,
          inputKey: Date.now(),
          uploading: false,
          progress: 0,
        });
      }, 500);
    });
  };

  render() {
    return (
      <>
        {this.state.errors.length > 0 && (
          <div className="alert alert-danger" role="alert">
            <ul className="mb-0 pl-3">
              {this.state.errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <div className="row">
            <div className={`col-8 ${this.props.hideTextInput ? "d-none" : ""}`}>
              <input
                type="url"
                readOnly={true}
                className="form-control"
                value={this.props.value}
                required={true}
                onChange={(e) => this.props.setValue(e.target.value)}
              />
            </div>
            <div className="col-4">
              <div className="upload-btn-wrapper">
                <button type="button" className="btn btn-primary">
                  {this.props.label ? this.props.label : "Select file..."}
                </button>
                <input
                  type="file"
                  disabled={this.state.uploading}
                  key={this.state.inputKey}
                  onChange={(e) => this.handleChange(e.target.files)}
                  accept={this.props.accept}
                />
              </div>
            </div>
          </div>
        </div>

        {this.state.uploading && (
          <div className="progress mt-3">
            <div
              style={{ width: `${this.state.progress}%` }}
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow={this.state.progress}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        )}
      </>
    );
  }
}

export default ImportData;
