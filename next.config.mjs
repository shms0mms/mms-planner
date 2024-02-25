/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: config => {
		config.module.rules.push({
			test: /\.(png|jpg|gif)$/i,
			use: [
				{
					loader: "url-loader",
					options: {
						limit: 8192,
					},
				},
			],
		})

		return config
	},
	env: {
		API_URL: process.env.API_URL,
	},
}

export default nextConfig
