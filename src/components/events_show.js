import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvent, deleteEvent, putEvent } from '../actions';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Appbar from 'material-ui/AppBar'


class EventShow extends Component{

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
  }

  renderField(field){
    const{ input, label, type, meta: {touched, error} } = field

    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onDeleteClick(){
    await this.props.deleteEvent(this.props.match.params.id)
    this.props.history.push("/")
  }

  async onSubmit(values){
    await this.props.putEvent(values)
    this.props.history.push("/")
  }

  render(){

    const { handleSubmit, pristine, submitting, invalid } = this.props

    const style = {margin: 10}

    return (
      <React.Fragment>
        <Appbar title="TodoApp" position="static"></Appbar>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label="Title" name="title" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="Body" name="body" type="text" component={this.renderField} />
          </div>
          <div>
            <RaisedButton label="submit" type="submit" style={style} disabled={pristine || submitting || invalid} primary={true}/>
            <RaisedButton label="Cancel" type="submit" style={style} containerElement={<Link to="/"/>}/>
            <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick} secondary={true}/>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

const validate = values => {
  const errors = {}

  // タイトルが無かったらエラー
  if (!values.title) errors.title = "Enter a title, please."

  // ボディーが無かったらエラー
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

const mapDispatchToProps = { deleteEvent, getEvent, putEvent }
const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return {initialValues: event, state}
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventShow)
)