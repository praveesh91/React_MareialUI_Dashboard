import React, { Component } from 'react'
import axios from 'axios'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import verified from '../../../Assets/Images/verified tag.png'
import live from '../../../Assets/Images/live.png'
import edit from '../../../Assets/Images/edit.png'


class listView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             listData: []
        }
    }
    componentDidMount(){
        axios.get("https://praveesh91.github.io/test_json/overviewData.json")
            .then(res =>{
                const data = res.data.parkingOverview;
                //const status = data.map(d => d.status)
                //const parkinName = data.map(d => d.spaceName)
                // console.log(status)
                // console.log(parkinName)
                this.setState({listData:data})
            })
    }
    render() {
        return (
            <React.Fragment>
                <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Parking Space Name</TableCell>
                        <TableCell>Occupied</TableCell>
                        <TableCell>Booked</TableCell>
                        <TableCell>Vacant</TableCell>
                        <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.listData.map((event) =>(
                            <TableRow>
                                <TableCell className="d-middle">
                                    <img src={live} alt="label" />
                                    {event.spaceName}
                                    <img src={verified} alt="label" />
                                </TableCell>
                                <TableCell>{event.status.Booked}</TableCell>
                                <TableCell>{event.status.Vacant}</TableCell>
                                <TableCell>{event.status.Occupied}</TableCell>
                                <TableCell><img src={edit} alt="edit icon"/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                    </TableContainer>
          </React.Fragment>
        )
    }
}

export default listView
