const withTM = require('next-transpile-modules')(['@mui/material', '@mui/system']) // pass the modules you would like to see transpiled

module.exports = withTM({
    reactStrictMode: true,
    swcMinify: true,
    styledComponents: true,
    jsxImportSource: true,
    webpack: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@mui/styled-engine': '@mui/styled-engine-sc',
        }
        return config
    },
})
