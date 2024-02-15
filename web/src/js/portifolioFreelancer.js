import instace from "./instance";


export default function baixarPortifolio() {
  
  instace.get('/portifolio/download', { responseType: 'arraybuffer' })
    .then(function (response) {
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'portifolio.zip';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      alert('Portifolio baixado com sucesso!');
    })
    .catch(function (error) {
      console.log(error);
      alert('Erro ao baixar o portifolio!');
    });
}
