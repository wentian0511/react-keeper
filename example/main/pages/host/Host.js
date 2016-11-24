import React from 'react'
import Header from '../../../common/Header'
import Footer from '../../../common/Footer'
import LeftNav from './LeftNav'
import { Route } from 'react-control'
import HostInfo from './HostInfo'
import Edit from './Edit'
import Concerns from './Concerns'

export default class Host extends React.Component {
  render() {
    return (
      <div className="page">
        <Header/>
        <div className="container-fluid">
          <LeftNav/>
          <div className="col-md-10">

            <Route component={HostInfo} path="/info"/>
            <Route component={Edit} path="edit" leaveFilter={[ 'editLeave' ]}/>
            <Route index path="concerns" component={Concerns}/>

          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
Host.propTypes = {
  children: React.PropTypes.any
}