/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\vbtechgist\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {StudioNavbar, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { myTheme } from './theme'

export default defineConfig({
  basePath: '/vbtechgist/studio',
  name: "VBTechGist_Admin_Studio",
  title: "VBTechGist Admin Studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  studio: {
    components: {
      // logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme
})
