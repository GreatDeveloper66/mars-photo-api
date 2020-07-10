import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

class Mars extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Grid container justify="center">
                <Grid item xs={12} sm={6} justify="center">
                    <h1>MARS PHOTO API</h1>
                </Grid>
            </Grid>
        )
    }
}

export default Mars