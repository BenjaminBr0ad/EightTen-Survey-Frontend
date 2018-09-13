import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { back } from '../actions'
import { Row, Button } from 'react-materialize'


class BackButton extends Component {
  render() {
    const { back } = this.props
    return (
      <Row className="container right-align">
        <Button
          className='eightten_button'
          onClick={() => {
          back()
        }}
        id="back-button"
        waves='light'>
          Back
        </Button>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  back
}, dispatch)

// const mapStateToProps = state => {
//   return {
//     view: state.mainReducer.view
//   }
// }

export default connect(
  null,
  mapDispatchToProps
)(BackButton);
