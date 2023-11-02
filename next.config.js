/** @type { import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  serverRuntimeConfig: {
    apiBaseUrl: process.env["API_BASE_URL"],
    mapApiKey: process.env["MAP_API_KEY"],
    textEditorApiKey: process.env["TEXT_EDITOR_API_KEY"],
  },
  publicRuntimeConfig: {
    apiBaseUrl: process.env["API_BASE_URL"],
    mapApiKey: process.env["MAP_API_KEY"],
    textEditorApiKey: process.env["TEXT_EDITOR_API_KEY"],
    // fileUploadUrl: process.env["FILE_UPLOAD_URL"],
  },
  env: {
    apiBaseUrl: process.env["API_BASE_URL"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dakshinkali.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dakshinkali.smartnagar.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dev.dakshinkali.smartnagar.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.test.dakshinkali.smartnagar.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
