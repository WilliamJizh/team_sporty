import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { commentAsync, PostInterface, selectPosts } from './postSlice';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    commentContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    comment: {
      paddingLeft: 10,
    },
  }),
);

export default function Post({ index, post }: { index: number; post: PostInterface }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {post.user.id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader="September 14, 2016"
      />
      {/*<CardMedia*/}
      {/*    className={classes.media}*/}
      {/*    image="/static/images/cards/paella.jpg"*/}
      {/*    title="Paella dish"*/}
      {/*/>*/}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon
            onClick={() => {
              dispatch(commentAsync(index));
            }}
          />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {posts.length > 0
          ? posts[index].comments.map((comment: string, key: number) => {
              return (
                <CardContent key={key}>
                  <div className={classes.commentContainer}>
                    <div>
                      {' '}
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {key}
                      </Avatar>
                    </div>
                    <div className={classes.comment}>
                      {' '}
                      <Typography paragraph>{comment}</Typography>
                    </div>
                  </div>
                </CardContent>
              );
            })
          : null}
        <CardContent>
          <div className={classes.commentContainer}>
            <div>
              {' '}
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            </div>
            <div className={classes.comment}>
              {' '}
              <Typography paragraph>Disqus</Typography>
            </div>
          </div>
        </CardContent>
        <CardContent>
          <div className={classes.commentContainer}>
            <div>
              {' '}
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            </div>
            <div className={classes.comment}>
              {' '}
              <Typography paragraph>Disqus</Typography>
            </div>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
