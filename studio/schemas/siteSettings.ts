import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name:'title', type:'string'}),
    defineField({name:'phone', type:'string'}),
    defineField({name:'email', type:'string'}),
    defineField({name:'regions', type:'array', of:[{type:'string'}]}),
    defineField({name:'logo', type:'image'}),
  ]
})
