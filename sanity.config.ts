import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'
import {projectId, dataset, apiVersion} from './sanity/env'
import {structure} from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Nortek CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    deskTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
})
