import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { auth0Client } from '../services/auth0'
import { firebaseClient } from '../services/firebase/firebase'
import Layout from './Layout'

const Cabinet = () => {

  console.log(auth0Client.handleCallback())

  return (
    <Layout>
      <Typography>
      </Typography>
      <Button 
        onClick={() => {
          auth0Client.signOut()
          firebaseClient.signOut()
        }}>
        Exit
      </Button>
    </Layout>
  )
}

export default Cabinet