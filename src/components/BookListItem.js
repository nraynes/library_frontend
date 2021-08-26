import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typeography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },
});

function BookListItem() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typeography className={classes.title} color="textSecondary" gutterBottom>
                    This is the title.
                </Typeography>
                <Typeography className="h6" color="textSecondary">
                    Book Author
                </Typeography>
            </CardContent>
        </Card>
    );

}

export default BookListItem;