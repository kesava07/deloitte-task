import React from 'react';
import '../App.css';
import * as actions from '../ReduxThunk/Actions/Index';
import { connect } from 'react-redux';
import * as sagaActions from '../ReduxSaga/Actions/Index';

function App(props) {
  const getData = () => props.getThunkData();
  const sagaData = () => props.getSagaData();
  return (
    <div className="App">
      <button onClick={getData}>Get thunk </button>
      <button onClick={sagaData}>Get saga </button>
      {props.thunkLoading ? <h1>Loading....</h1> : null}
      {
        props.thunkData && props.thunkData.map((val, i) => <div key={i}>{val.name}</div>)
      }
    </div>
  );
};

const mapStateToProps = state => ({
  thunkData: state.thunk.thunkData,
  thunkLoading: state.thunk.thunkLoading
});

const mapDispatchToProps = dispatch => ({
  getThunkData: () => dispatch(actions.getData()),
  getSagaData: () => dispatch(sagaActions.fetchData())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
