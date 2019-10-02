import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip, Card, CardContent } from '@material-ui/core';
// Container, Paper, Chip //

const Car = (props) => {
    const id = props.match.params.id
    const currentCar = cars.find(c => {
        return c.id == id;
    })

    return (
        <Card>
            <CardContent>
                <Container className="car-container">
                    <Paper className="car-paper">
                        {currentCar.Name}
                        <br></br>
                        {Object.keys(currentCar).map((key, idx) => {
                            return <Chip label={`${key}: ${currentCar[key]}`} />
                        })}

                    </Paper>
                </Container>
            </CardContent>
        </Card>


    )
}



export default Car;