module.exports = {
    purge: {
        enabled: true,
        content: ['./*.html'],
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        '@tailwindcss/forms'
    ],
}
