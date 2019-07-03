const load = async () => {
    const file = "other.js";
    
    await import(`./${file}`);
};

export default load;
