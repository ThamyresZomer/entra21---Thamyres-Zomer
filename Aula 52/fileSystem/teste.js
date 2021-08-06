function obterArquivos(path) {

}

(async () => {
    const nomePasta = path.resolve(__dirname, "..", "modulosNode");
    
    const files = await fsPromises.readdir(nomePasta);

    console.log(files);
})();
