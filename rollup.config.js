import scss from 'rollup-plugin-scss'

export default {
    input: 'src/index.js',
    output: {
        file: 'public/vendor/js/calc.js',
        name: 'Calc',
        format: 'iife'
    },
    plugins: [scss({
        output: 'public/vendor/css/calc.css'
    })]
}