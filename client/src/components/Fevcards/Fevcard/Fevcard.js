import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from './styles';


const Fevcard = ({ fevcard, setCurrentId,searchData }) => {
  
  const classes = useStyles();
  const image = ("upload/")

  return (  
    <div>
      {searchData ?  searchData && searchData.map((item,index)=>{
      return(
          <Card className={classes.card}  key={index}>
          <CardMedia className={classes.media} image={image+item.image } title={item.title} />
            <div className={classes.overlay}>
          <Typography variant="h6">{item.country}</Typography>
          <Typography variant="body2">{moment(item.date).fromNow()}</Typography>
          </div>
          <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(item._id)}><MoreHorizIcon fontSize="default" /></Button>
          </div>
          <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{item.description}</Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">{item.title}</Typography>
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{item.date}</Typography>
          </CardContent>
          </Card>
        )
      }) : fevcard.data && fevcard.data.map((item,index)=>{
        return(
            <Card className={classes.card}  key={index}>
            <CardMedia className={classes.media} image={image+item.image } title={item.title} />
              <div className={classes.overlay}>
            <Typography variant="h6">{item.country}</Typography>
            <Typography variant="body2">{moment(item.date).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
            <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(item._id)}><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{item.description}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{item.title}</Typography>
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{item.date}</Typography>
            </CardContent>
            </Card>
          )
        })  }
    </div>
    
  );
};

export default Fevcard;
