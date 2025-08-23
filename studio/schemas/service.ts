import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({name:'title', type:'string'}),
    defineField({name:'slug', type:'slug', options:{source:'title'}}),
    defineField({name:'intro', type:'text'}),
    defineField({name:'specs', type:'array', of:[{type:'object', fields:[
      {name:'label', type:'string'}, {name:'value', type:'string'}
    ]}]})
  ]
})
