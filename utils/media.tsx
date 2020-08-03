import { createMedia } from "@artsy/fresnel"

const ExampleAppMedia = createMedia({
  breakpoints: {
    sm: 0,    //small
    md: 768,  //medium
    lg: 1024, //large
    xl: 1192, //extra large
    el: 1398, //even larger
  },
})

// Make styles for injection into the header of the page
export const mediaStyles = ExampleAppMedia.createMediaStyle()

export const { Media, MediaContextProvider } = ExampleAppMedia