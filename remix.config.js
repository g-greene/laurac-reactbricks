import { config } from "@netlify/remix-adapter";

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...(process.env.NODE_ENV === "production" ? config : undefined),
  serverDependenciesToBundle: [/^pigeon-maps/,/^react-bricks/,/^react-lazy-load-image-component/,/^react-dropzone/,/^prismjs/,/^remix-run/],
  tailwind: true,
  postcss: true
  // This works out of the box with the Netlify adapter, but you can
  // add your own custom config here if you want to.
  //
  // See https://remix.run/file-conventions/remix-config
};
