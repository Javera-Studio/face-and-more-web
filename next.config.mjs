/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack(config) {
    // Replace next-image-loader with asset/resource so that
    // `import img from './image.jpg'` returns a URL string (Vite-compatible behavior)
    function processRules(rules) {
      return rules.map((rule) => {
        if (!rule) return rule

        if (rule.oneOf) {
          return { ...rule, oneOf: processRules(rule.oneOf) }
        }

        if (
          rule.use &&
          Array.isArray(rule.use) &&
          rule.use.some(
            (u) =>
              u &&
              typeof u.loader === 'string' &&
              (u.loader.includes('next-image-loader') ||
                u.loader.includes('image-loader'))
          )
        ) {
          return {
            test: rule.test,
            issuer: rule.issuer,
            type: 'asset/resource',
            generator: { filename: 'static/media/[name].[contenthash][ext]' },
          }
        }

        return rule
      })
    }

    config.module.rules = processRules(config.module.rules)
    return config
  },
}

export default nextConfig
