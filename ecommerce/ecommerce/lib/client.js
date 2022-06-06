// connect Sanity as the backend
import sanityClient from '@sanity/client';
import imageUrlBuilder from  '@sanity/image-url';

export const client = sanityClient({
    projectId: 'b15cw8mt',
    dataset: 'production',
    apiVersion: '2022-06-03',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

// Sanity will give us access to the url where images are stored
export const urlFor = (source) => builder.image(source);
