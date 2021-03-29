import * as XLSX from 'xlsx';

//Excel dosyasini okuma fonksiyonu

    const readExcel = (file) => {
            const promise = new Promise((resolve, reject) => {
              const fileReader = new FileReader();
              fileReader.readAsArrayBuffer(file);
              fileReader.onload = (e) => {
                console.log("here0", e.target.result);
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: "buffer" });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
      
                const data = XLSX.utils.sheet_to_json(ws);
                console.log("here1 ", data);
                resolve(data);
              };
              fileReader.onerror = (error) => {
                console.log("here2", error);
                reject(error);
              };
            });
            promise.then((d) => {
              console.log(d);
              
            });
          }
        

        
            
export default readExcel;