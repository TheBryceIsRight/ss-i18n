import React from 'react'
import useTranslation from '../hooks/useTranslation'
import {Typography} from '@material-ui/core';
import {Link} from '@material-ui/core';
import { Media, MediaContextProvider } from "../utils/media";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GridListTileBar from '@material-ui/core/GridListTileBar';


const imgStyles = {
  width: '100%',
};

{/*GridList styles */}
const useStyles1 = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1100,
    height: 600,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}),
);


const Artist: React.FC = () => {
  const { locale, t } = useTranslation();
  const classes = useStyles1();

  return (
    <MediaContextProvider>
    <Media lessThan='lg'>
    <div>
      <Typography variant='h2'>René Magritte</Typography>
      <br/>
      <img src="/img/magritte.jpg" alt="Rene Magritte" style={imgStyles}/>
      <br/>
      <br/>
      <Typography variant='body1'>{t('bio')}</Typography>
      <Link href={`http://${locale}.wikipedia.org/wiki/René_Magritte`}>{t('readMore')}</Link>
    </div>
    </Media>
    <Media greaterThanOrEqual='lg'>
    <Typography variant='h2'>René Magritte</Typography>
    <br/>
    <GridList cellHeight={550} className={classes.gridList} spacing={20}>
      <GridListTile>
      <img src="/img/magritte.jpg" alt="Rene Magritte" />
      <GridListTileBar
        title='Rene Magritte'
        subtitle= 'Portrait of Magritte in front The Pilgrim, taken by Lothar Wolleh in 1967'
      />
      </GridListTile>
      <GridListTile>
        <Typography variant='body1'>{t('bio')}</Typography>
        <br/>
        <Link href={`http://${locale}.wikipedia.org/wiki/René_Magritte`}>{t('readMore')}</Link>
      </GridListTile>
    </GridList>
    </Media>
    </MediaContextProvider>
  )
}

export default Artist
