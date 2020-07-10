import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl';

class Mars extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid item xs={3} justify="center" alignItems="center">
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                        <h1>MARS PHOTO API</h1>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                        <h3>CURIOSITY</h3>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                        <form>
                            <FormControl>

                            </FormControl>
                        </form>
                    </Grid>
                </Grid>
                

            </Grid>
        )
    }
}

export default Mars