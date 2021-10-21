/* Dependencies */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const path = require('path')

/* Constants */
const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 */
module.exports = (phase, { defaultConfig }) => {

	/**
	* @type {import('next').NextConfig}
	*/
	const globalNextConfig = {
		// Use the CDN in production and localhost for development.
		assetPrefix: isProd
			? 'https://cdn.mydomain.com'
			: '',
		// ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts']
		pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
		reactStrictMode: true,
		sassOptions: {
			includePaths: [path.join(__dirname, 'src/styles')],
		}
	}

	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			...globalNextConfig,
			env: {}
		}
	}

	return {
		...globalNextConfig,
		reactStrictMode: true,
		env: {}
	}
}
