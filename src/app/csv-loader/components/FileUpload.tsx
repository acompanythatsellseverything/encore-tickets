'use client'
import React, {useState} from 'react';

export default function FileUpload(props:any){
    const [file, setFile] = useState<File | null>(null);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    // const [successfulMessage, setSuccessfulMessage] = useState<string>('');
    const [loh, setLoh] = useState<any>();
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLoginSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const isValidLogin = username === props.apiLogin && password === props.apiPassword;
        if (!isValidLogin) {
            setErrorMessage('Invalid username or password.');
        } else {
            setIsAuthenticated(true);
            setErrorMessage('');
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const handleFileUploadSubmit = async (event: React.FormEvent) => {
        setErrorMessage('')
        setLoh(undefined)

        event.preventDefault();
        if (!file) {
            setErrorMessage('No file selected.');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await fetch(`${props.apiUrl.replace('1337', '8000')}/upload-csv`, {
                method: "POST",
                body: formData,
                redirect: "follow",
                cache: 'no-cache',
            });

            if(response.status === 400){
                const res = await response.json();
                setErrorMessage(res.error)
                return
            }

            const result = await response.json();
            setLoh(result);
            setErrorMessage('File uploaded successfully');
        } catch (error) {
            setErrorMessage('Error during file upload.');
            console.error('Error during file upload:', error);
        }
    };
    console.log('LOh', loh)
    return (
        <div className='px-4'>
            {!isAuthenticated ? (
                <form onSubmit={handleLoginSubmit} className='flex flex-col gap-2'>
                    <div>
                        <label htmlFor="username" className='mr-2'>Username:</label>
                        <input type="text" id="username" value={username} onChange={handleUsernameChange}
                               className='border  border-black  px-2'/>
                    </div>
                    <div>
                        <label htmlFor="password" className='mr-2'>Password:</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange}
                               className='border  border-black px-2'/>
                    </div>
                    {errorMessage && <p className='text-red-700'>{errorMessage}</p>}
                    <button type="submit"
                            className='bg-black text-white font-bold py-2 border border-black hover:bg-white hover:text-black transition-all mt-4'>Login
                    </button>
                </form>
            ) : (
                <form onSubmit={handleFileUploadSubmit}>
                    <div>
                        <label htmlFor="fileInput" className='mr-2'>Choose file:</label>
                        <input type="file" id="fileInput" onChange={handleFileChange}/>
                    </div>
                    {errorMessage &&
                        <p className={errorMessage === 'File uploaded successfully' ? 'text-green-700 mt-2' : 'text-red-700 mt-2'}>
                            {errorMessage}
                        </p>
                    }
                    {loh &&
                        <div className='mt-2'>
                            <p>Total events: {loh.processed.total_events}</p>
                            <p className='text-red-700'>Failed events: {loh.processed.failed_uploads}</p>
                            <p className='text-green-700'>Successful events: {loh.processed.successful_uploads}</p>
                        </div>
                    }

                    <button type="submit"
                            className='bg-black text-white font-bold py-2 border border-black hover:bg-white hover:text-black transition-all w-full mt-4'>Upload
                        File
                    </button>
                </form>
            )}
        </div>
    );
};


