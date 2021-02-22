import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    width: '100vw',
    height: '100vh',
    background: 'yellow',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundImage:
      "url('https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/128065463_1647093865463372_1647521075605416364_o.jpg?_nc_cat=107&ccb=3&_nc_sid=19026a&_nc_ohc=w2XEMu4cmFwAX8aQbKR&_nc_oc=AQnlTL8jy9c3aGO5BE4M7xE72yeiO8HLTmJxVZk25uEe6KShGjt1ADHjHQ14XWly5ZM&_nc_ht=scontent.fdad2-1.fna&oh=46d69eef6ecd6d9432d4ed30d678a9f8&oe=605A679A')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  backgroundColor: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.8,
    background: 'black',
    zIndex: 1,
  },
}));
