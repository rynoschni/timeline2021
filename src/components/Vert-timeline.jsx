import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 750,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  content: {
    justifyContent: "flex-start",
    padding: theme.spacing(3),
    margin: "65px 0px",
  },
  image: {
    width: '100%',
    height: 'auto',
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(3),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


const VertTimeline = (props) => {
  const { yearData } = props;
  const classes = useStyles()
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className={classes.content}>
      <Typography variant="h3" component="h1">
        {yearData.year}
      </Typography>
        
        {yearData.itemsData.map((item) => (
          <>
          <Card className={classes.root} key={item.id} pb={15}>
            <CardActionArea>
            {item.media.type !== 'img' ? 
              <CardMedia 
              width='640'
              height='360'
              component={item.media.type}
              alt={item.title} 
              src={item.media.source.url} 
              title={item.title} /> 
              : 
              <CardMedia 
              className={classes.image}
              component={item.media.type}
              alt={item.title} 
              image={item.media.source.url} 
              title={item.title} />
            }
            </CardActionArea>
              <CardContent>
                  <Typography 
                  gutterBottom variant="h5" component="h2"
                  >
                    {item.contentTitle}
                    <p>{item.contentText}</p>
                  </Typography>
                  <Typography 
                  variant='body2' 
                  color='textSecondary' 
                  component='p'
                  >
                    {item.contentDetail}
                  </Typography>
              </CardContent>
            
            <CardActions>
              {item.moreInfo !== false ? (
                <>
                <Button size='small' color='primary' onClick={handleClickOpen}>
                Learn More
              </Button>
              <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Typography variant='h4'>
                {item.more.moreTitle}
                </Typography>
                
              </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  {item.more.moreText}
                </Typography>
              </DialogContent>
              <DialogContent>
                <Typography variant='h6'>
                <Avatar alt={item.more.moreAuthor} src={item.more.moreAvatar}/>
                  {item.more.moreAuthor}
                </Typography>
              </DialogContent>
            </Dialog>
            </>
              ): <></>}
              
            </CardActions>
          </Card>
          <p></p>
          
        </>
        ))}
    </main>
  );
};

export default VertTimeline;
