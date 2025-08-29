import { config } from 'dotenv';

config({ path: '.env' });

export const APP_BASE_URL = process.env.APP_BASE_URL || 'http://localhost:3000';
export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api';
