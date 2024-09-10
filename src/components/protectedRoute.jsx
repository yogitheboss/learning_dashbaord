import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
const ProtectedRoute = () => {
    const {isAuthenticated} = useAuth0()
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/" />
  )
}

export default ProtectedRoute