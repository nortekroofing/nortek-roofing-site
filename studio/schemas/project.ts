import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: r => r.required()}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({name: 'cover', type: 'image', options: {hotspot: true}}),
    defineField({name: 'year', type: 'number'}),
    defineField({name: 'location', type: 'string'}),
    defineField({name: 'systems', type: 'array', of: [{type:'string'}]}),
    defineField({name: 'gallery', type: 'array', of: [{type: 'image'}]}),
    defineField({name: 'order', type: 'number'}),
  ]
})
