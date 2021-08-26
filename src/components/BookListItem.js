import React from 'react';
import { useLocation } from 'react-router-dom';
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
        fontSize: 22,
    },
    pos: {
        marginBottom: 12,
    },
});

function BookListItem(props) {
    const location = useLocation();
    const classes = useStyles();

    function handleClick() {
        switch(location.pathname) {
            case "/checkin" :
                fetch(`http://localhost:1000/api/books/${props.book.isdn}/return`, {
                    method: "PUT"
                })
                    .then(data => data.json())
                    .then(data => {
                        if (data.length > 0) {
                            alert("Book checked in successfully")
                        } else {
                            alert("Book was not checked in.")
                        }
                    })
                break;
            case "/checkout" :
                fetch(`http://localhost:1000/api/${props.book.isbn}/checkout/`, {
                    method: "PUT"
                })
                .then(res=>res.json())
                .then(data=>{
                    alert('Book successfully checked out!')
                })
                .catch(err=>{
                    alert('Error checking out your book')
                })
                break;
            case "/dashboard" :
                break;
        }
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typeography className={classes.title} color="textSecondary" gutterBottom>
                    {props.book.title}
                </Typeography>
                <Typeography className="h6" color="textSecondary">
                    By: {props.book.author}
                </Typeography>
            </CardContent>
        </Card>
    );

}

export default BookListItem;