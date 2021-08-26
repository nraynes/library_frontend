import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typeography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        cursor: 'pointer',
        margin: 'auto',
        maxWidth: '95%',
        boxShadow: '0 0 5 black',
        transition: '0.5s ease-in-out'
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
    const [color, setColor] = useState('white')

    function handleClick() {
        switch(location.pathname) {
            case "/checkin" :
                fetch(`http://localhost:1000/api/books/${props.book.isbn}/return`, {
                    method: "PUT"
                })
                    .then(data => data.json())
                    .then(data => {
                        console.log("data checkin returned", data)
                        if (data.length > 0) {
                            alert("Book checked in successfully")
                            // setColor('green')
                        } else {
                            alert("Book was not checked in.")
                        }
                    })
                break;
            case "/checkout" :
                fetch(`http://localhost:1000/api/books/${props.book.isbn}/checkout/${props.user_id}`, {
                    method: "PUT"
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log("data checkout returned", data)
                    alert('Book successfully checked out!')
                })
                .catch(err=>{
                    alert('Error checking out your book')
                })
                break;
            case "/dashboard" :
                fetch(`http://localhost:1000/api/books/${props.book.isbn}`)
                    .then(data => data.json())
                    .then(data => {
                        if (data[0].checked_out === true) {
                            alert(`user ${data[0].user_id} has this checked out`)
                        }
                    })
                break;
        }
    }

    return (
        <Card onClick={handleClick} className={classes.root} >
            <CardContent>
                <Typeography className={classes.title} color="textSecondary" gutterBottom>
                    {props.book.title}
                </Typeography>
                <Typeography className="h6" color="textSecondary">
                    By: {props.book.author}
                </Typeography>
                <Typeography className="h6" color="textSecondary">
                    ISBN: {props.book.isbn}
                </Typeography>
                
            </CardContent>
        </Card>
    );

}

export default BookListItem;