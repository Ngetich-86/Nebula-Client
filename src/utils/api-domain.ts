 export default function getApiDomain() {
  if (process.env.NEXT_PUBLIC_API_DOMAIN) {
    return process.env.NEXT_PUBLIC_API_DOMAIN;
  }
  // Default to localhost if the environment variable is not set
  return 'http://localhost:3000';
}