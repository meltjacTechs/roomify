import {useState} from 'react';
import { useOutletContext } from 'react-router';
import { Upload as UploadIcon } from 'lucide-react';

const Upload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [progres, setProgress] = useState(0);

    const { isSignedIn} = useOutletContext<AuthContext>();
  return (
    <div className="upload">
      {!file ? (
        <div className={`dropzone ${isDragging ? 'is-dragging' : ''}`}>
            <input
                type="file"
                className="drop-input" 
                accept=".jpg,.jpeg,.png"
                disabled={!isSignedIn}
            />

            <div className="drop-content">
                <div className="drop-icon">
                    <UploadIcon size={20} />
                </div>
                <p>{isSignedIn ? ("Click to upload or just drag and drop") : ("Please sign in or sign up with Puter to upload")}</p>
                <p className="help">Maximum file size 50MB</p>
            </div>
        </div>
      ): (
        <div>
            FILE
        </div>
      )}
    </div>
  );
}

export default Upload;
