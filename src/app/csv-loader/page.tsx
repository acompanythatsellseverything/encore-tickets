import FileUpload from "@/app/csv-loader/components/FileUpload";

export default function CsvLoader(){
    return(
        <div className='h-screen flex items-center justify-center'>
            <FileUpload apiUrl={process.env.API_URL} apiPassword={process.env.CSV_UPLOAD_API_PASSWORD} apiLogin={process.env.CSV_UPLOAD_API_LOGIN}/>
        </div>
    )
}