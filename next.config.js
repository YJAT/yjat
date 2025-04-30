
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', 
        hostname: 'www.notion.so', 
        pathname: '/**'
      },
      {
        protocol: 'https', 
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com', 
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig