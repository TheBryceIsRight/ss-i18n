
import React from 'react';
import {Formik, Form, Field} from 'formik';
import {
  Button,
  LinearProgress,
  MenuItem
} from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import Box from '@material-ui/core/Box';
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useTranslation from '../hooks/useTranslation';


function Alert(props : any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

  

  
function FeedbackFormComponent() {
  const { t } = useTranslation();
  const [openSnack, setOpenSnack] = React.useState(false);

  let ranges = [
    {
      value: '1',
      label: t('horrible'),
    },
    {
      value: '2',
      label: t('bad'),
    },
    {
      value: '3',
      label: t('ok'),
    },
    {
      value: '4',
      label: t('good'),
    },
    {
      value: '5',
      label: t('excellent'),
    },
  ];

  const handleClickSnack = () => {
    setOpenSnack(true);
    };

  const handleClose = (_event : any, reason : any) => {
  if (reason === 'clickaway') {
      return;
  }

  setOpenSnack(false);
  };

  const FeedbackForm = () => (
    <Formik
      initialValues={{
        feedback: '',
        select: '3',

      }}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          setSubmitting(false);
          console.log('Debug Log: ' + JSON.stringify(values, null, 2));
        }, 500);
        fetch(`https://hooks.zapier.com/hooks/catch/8157500/okgyawz/`, {
          method: 'POST',
          body: JSON.stringify(values, null, 2),
        });
        handleClickSnack();
      }}
      render={({submitForm, isSubmitting}) => (
          <Form>
            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                name="select"
                label={t('rating')}
                select
                variant="standard"
                helperText={t('yourExperience')}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {ranges.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
            </Box>
            <Box margin={1}>
                <Field
                  component={TextField}
                  type="text"
                  name="feedback"
                  label={t('feedback')}
                  helperText={t('weLoveHearing')}
                />
            </Box>
            {isSubmitting && <LinearProgress />}
            <br/>
            <Box margin={1}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                {t('submit')}
              </Button>
            </Box>
          </Form>
      )}
    />
  );


    return <React.Fragment>
      <br/>
      <Grid container direction='row' alignItems='center' spacing={2}>
            <Grid item>
                <ThumbsUpDown/>
            </Grid>
            <Grid item>
                <Typography variant='body1'>{t('wasHelpful')}</Typography>
            </Grid>
            </Grid>
      <FeedbackForm/>
      <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Feedback successfully submitted, thank you for helping us improve!
            </Alert>
          </Snackbar>
    </React.Fragment> 
}

export default FeedbackFormComponent