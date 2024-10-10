'use client'
import React, {useState} from 'react';

const FileUpload = (props:any) => {
    const [file, setFile] = useState<File | null>(null);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

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
        event.preventDefault();

        if (!file) {
            setErrorMessage('No file selected.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(`${props.apiUrl}:8000/upload-csv`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Upload failed: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('File uploaded successfully:', result);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Error during file upload.');
            console.error('Error during file upload:', error);
        }
    };

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
                    {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
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
                    {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                    <button type="submit"
                            className='bg-black text-white font-bold py-2 border border-black hover:bg-white hover:text-black transition-all w-full mt-4'>Upload
                        File
                    </button>
                </form>
            )}
        </div>
    );
};

export default FileUpload;
