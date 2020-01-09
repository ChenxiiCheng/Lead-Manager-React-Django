import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  // 当获取到新props会运行此生命周期函数
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) {
        alert.error(`Name Error: ${error.msg.name.join()}`);
      }
      if (error.msg.email) {
        alert.error(`Email Error: ${error.msg.email.join()}`);
      }
      if (error.msg.message) {
        alert.error(`Message Error: ${error.msg.message.join()}`);
      }
      if (error.msg.username) {
        alert.error(error.msg.username.join());
      }
      if (error.msg.detail) {
        alert.error(error.msg.detail);
      }
      if (error.msg.non_field_errors) {
        alert.error(error.msg.non_field_errors.join());
      }
    }

    if (message !== prevProps.message) {
      if (message.deleteLead) {
        alert.success(message.deleteLead);
      }
      if (message.addLead) {
        alert.success(message.addLead);
      }
      if (message.passwordsNotMatch) {
        alert.error(message.passwordsNotMatch);
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

Alerts.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps, null)(withAlert()(Alerts));
