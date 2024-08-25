/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.clerk.com'],
    },
    experimental: {
		serverActions: {
			allowedForwardedHosts: ['localhost','refactored-space-halibut-9v4v9jq6wpxhp699-3000.app.github.dev'],
			allowedOrigins: ['http://localhost','https://refactored-space-halibut-9v4v9jq6wpxhp699-3000.app.github.dev/']
		},
	}
};

module.exports = nextConfig;
