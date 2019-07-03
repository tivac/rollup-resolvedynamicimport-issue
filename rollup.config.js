module.exports = {
    input : "src/index.js",

    output : {
        dir : "dist/",
        format : "esm",
    },

    plugins : [
        {
            resolveDynamicImport(specifier, importer) {
                console.log(specifier);

                return false;
            },
        },
    ],
};
