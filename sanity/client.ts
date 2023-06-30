import { createClient } from 'next-sanity'
import clientConfig from './config/client'

export const sanityClient = createClient(clientConfig)
