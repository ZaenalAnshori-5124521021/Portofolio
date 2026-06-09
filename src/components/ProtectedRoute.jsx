import React from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from '../supabase'

export default function ProtectedRoute({children}){
  // simple placeholder: in real app check supabase.auth.getUser()
  const user = null
  if(!user) return <Navigate to="/login" replace />
  return children
}
