import React, { Component, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

export default function Mars() {
    const [ camera, setCamera ] = useState('Any')
    const handleChange = camera => setCamera(camera)
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
                            <InputLabel htmlFor="age-native-simple">Camera</InputLabel>
                            <Select native value={camera} onChange={}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-native-simple',
                                }}
                            >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                            </Select>
                            </FormControl>
                        </form>
                    </Grid>
                </Grid>


            </Grid>
        )
}
