
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

//Zapier webhook:  https://hooks.zapier.com/hooks/catch/8157500/okgyawz/

  const ranges = [
    {
      value: '1',
      label: 'Horrible',
    },
    {
      value: '2',
      label: 'Bad',
    },
    {
      value: '3',
      label: 'OK',
    },
    {
      value: '4',
      label: 'Good',
    },
    {
      value: '5',
      label: 'Excellent',
    },
  ];


  const FeedbackForm = () => (
    <Formik
      initialValues={{
        feedback: '',
        select: '3',

      }}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
        fetch(`https://hooks.zapier.com/hooks/catch/8157500/okgyawz/`, {
          method: 'POST',
          body: JSON.stringify(values, null, 2),
        });
      }}
      render={({submitForm, isSubmitting}) => (
          <Form>
            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                name="select"
                label="Rating"
                select
                variant="standard"
                helperText="Your experience of this page"
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
                label="Feedback"
                name="feedback"
                helperText="We love hearing from our users"
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
                Submit
              </Button>
            </Box>
          </Form>
      )}
    />
  );

function FeedbackFormComponent() {

    return <React.Fragment>
      <br/>
      <Grid container direction='row' alignItems='center' spacing={2}>
            <Grid item>
                <ThumbsUpDown/>
            </Grid>
            <Grid item>
                <Typography variant='body1'>Was this page helpful?</Typography>
            </Grid>
            </Grid>
      <FeedbackForm/>
    </React.Fragment> 
}

export default FeedbackFormComponent