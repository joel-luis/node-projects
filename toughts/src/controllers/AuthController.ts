import { Request, Response } from 'express'
import { User } from '../models/User'
import bcrypt from 'bcryptjs'

async function login(req: Request, res: Response) {
  res.render('auth/login')
}

async function register(req: Request, res: Response) {
  res.render('auth/register')
}

async function registerPost(req: Request, res: Response) {
  const { name, email, password, confirmpassword } = req.body
  console.log(req.body)

  if (password !== confirmpassword) {
    req.flash('message', 'As senhas não conferem, tente novamente!')
    res.render('auth/register')
    return
  }
}

export function AuthController() {
  return {
    login,
    register,
    registerPost,
  }
}
