const execa = require('execa')
const env = 'development'

execa(
    'rollup',
    ['-c', 'configs/rollup.config.dev.js', '-w', '--environment', [`NODE_ENV:${env}`].filter(Boolean).join(',')],
    {
        stdio: 'inherit'
    }
)
