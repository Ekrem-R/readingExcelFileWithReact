import readExcel from '../services/excelService';

function ReadFile(){
    return (
        <div>
            <input type="file" onChange={(e)=>{
                const file=e.target.files[0];
                readExcel(file);
            } } />
        </div>
    );
}
export default ReadFile;