import {defineConfig} from 'sanity'
import {schema} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Nortek Roofing Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  schema,
})
