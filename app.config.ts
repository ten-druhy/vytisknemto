export default defineAppConfig({
    ui: {
        theme:{
            
    extend:{
        colors:{
          'web-orange': {
            '50': '#fffbeb',
            '100': '#fff4c6',
            '200': '#ffe888',
            '300': '#ffd64a',
            '400': '#ffc220',
            '500': '#f9a20b',
            '600': '#dd7802',
            '700': '#b75406',
            '800': '#94400c',
            '900': '#7a360d',
            '950': '#461a02',
          },
        }
      }
        },
        primary:"orange",
        variables: {
            light: {
                background: "255 255 255",
                foreground: "var(--color-gray-700)",
            },
            dark: {
                background: "var(--color-gray-900)",
                foreground: "var(--color-gray-200)",
            },
        },
    },
});
