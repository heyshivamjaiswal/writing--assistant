import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import prisma from '../lib/prisma';

import { SignupData, SigninData } from '../types/type';

export const createUser = async ({ fullName, email, password }: SignupData) => {
  // 1. Check existing user
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error('User already exists');
  }

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Create user
  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      password: hashedPassword,
    },
  });

  // 4. Generate JWT
  const token = jwt.sign(
    {
      userId: user.id,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: '7d',
    }
  );

  return {
    token,
    user,
  };
};

export const loginUser = async ({ email, password }: SigninData) => {
  //1. Find user
  const user = await prisma.user.findUnique({
    where: { email },
  });

  //2.If no user found
  if (!user) {
    throw new Error('Invalid credentials');
  }

  //3. If user exits , compare the hased passowrd
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error('Invalid passowrd');
  }

  //4.Generate token
  const token = jwt.sign(
    {
      userId: user.id,
    },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );
  return {
    token,
    user,
  };
};
