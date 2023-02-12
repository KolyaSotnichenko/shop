import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { auth0Client } from '../services/auth0'
import { firebaseClient } from '../services/firebase/firebase'
import Layout from './Layout'

const Cabinet = () => {

  (async () => {

    const loggedInThroughCallback = await auth0Client.handleCallback();
    if (loggedInThroughCallback) {
      console.log(auth0Client.getIdToken())
      const response = await fetch('http://localhost:3001/firebase', {
        headers: {
          'Authorization': 'Bearer ' + auth0Client.getIdToken()
        },
      })
      const data = await response.json();
      await firebaseClient.setToken(data.firebaseToken);
      await firebaseClient.updateProfile(auth0Client.getProfile());
      await firebaseClient.addUser()
    }
  })();

  return (
    <Layout>
      <Box
        sx={{
          textAlign: 'center'
        }}
      >
        <Typography>
          test@yopmail.com
        </Typography>
        <Button
          onClick={() => {
            auth0Client.signOut()
          }}>
          Exit
        </Button>
      </Box>
    </Layout>
  )
}

export default Cabinet