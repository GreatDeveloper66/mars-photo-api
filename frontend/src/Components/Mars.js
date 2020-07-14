import React, { Component, useState } from 'react'
import Grid from '@material-ui/core/Grid'
//import FormControl from '@material-ui/core/FormControl';
//import InputLabel from '@material-ui/core/InputLabel'
//import Select from '@material-ui/core/Select'

export default function Mars() {
    const [ camera, setCamera ] = useState('FHAZ')
    const handleChange = event => setCamera(event.target.value)

        return(

            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid item xs={3}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                        <h1>MARS PHOTO API</h1>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                        <h3>CURIOSITY</h3>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                        <form>
                            <label htmlFor="camera">Camera</label>
                            <select id="cameras" name="cameras" value={camera} onChange={handleChange}>
                                <option value="FHAZ">FHAZ</option>
                                <option value="RHAZ">RHAZ</option>
                                <option value="MAST">MAST</option>
                                <option value="CHEMCAM">CHEMCAM</option>
                                <option value="MAHLI">MAHLI</option>
                                <option value="MARDI">MARDI</option>
                                <option value="NAVCAM">NAVCAM</option>
                                <option value="PANCAM">PANCAM</option>
                                <option value="MINITES">MINITES</option>
                            </select>
                            <label htmlFor="camera">Camera</label>
                            <select id="cameras" name="cameras" value={camera} onChange={handleChange}>
                                <option value="FHAZ">FHAZ</option>
                                <option value="RHAZ">RHAZ</option>
                                <option value="MAST">MAST</option>
                                <option value="CHEMCAM">CHEMCAM</option>
                                <option value="MAHLI">MAHLI</option>
                                <option value="MARDI">MARDI</option>
                                <option value="NAVCAM">NAVCAM</option>
                                <option value="PANCAM">PANCAM</option>
                                <option value="MINITES">MINITES</option>
                            </select>
                            
                        </form>
                    </Grid>
                </Grid>


            </Grid>
        )
}
