import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { auth0Client } from '../services/auth0'
import { firebaseClient } from '../services/firebase/firebase'
import Layout from './Layout'

const Cabinet = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    getUserInfo()
  }, [user])

  const getUserInfo = async () => {
    const loggedInThroughCallback = await auth0Client.handleCallback();
    if (loggedInThroughCallback) {
      console.log(auth0Client.getIdToken())
      setUser(auth0Client.getProfile())
      const response = await fetch('https://shop-9cd65.web.app/firebase', {
        headers: {
          'Authorization': 'Bearer ' + auth0Client.getIdToken()
        },
      }).then(res => {
        console.log(res.status)
      })
      const data = await response.json();
      await firebaseClient.setToken(data.firebaseToken);
      await firebaseClient.updateProfile(auth0Client.getProfile());
      await firebaseClient.addUser()
    }
  }

  return (
    <Layout>
      <Box
        sx={{
          textAlign: 'center'
        }}
      >
        <Typography>
          {user?.name}
        </Typography>
        <Button
          onClick={() => {
            auth0Client.signOut()
            firebaseClient.signOut()
          }}>
          Вихід
        </Button>
      </Box>
    </Layout>
  )
}

export default Cabinet