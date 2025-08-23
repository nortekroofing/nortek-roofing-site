export const projectsQuery = `
*[_type == "project"] | order(order asc){
  _id, title, slug, "cover": cover.asset->url, year, location, systems
}
`
export const siteSettingsQuery = `
*[_type == "siteSettings"][0]{ title, phone, email, regions }
`
