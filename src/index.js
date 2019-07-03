const load = async () => {
    const file = "other.js";
    
    // resolveDynamicImport will get undefined
    await import(`./${file}`);

    // resolveDynamicImport will get AST nodes
    await import("./" + file);
};

export default load;
