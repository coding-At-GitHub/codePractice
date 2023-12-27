import { v4 as uuidv4 } from 'uuid';

export const URI = (window as any).URI;
export const TIMEOUT = (window as any).TIMEOUT;
export const VERSION_NO = "18.6.4"; 
export const MODE = (window as any).MODE; 

export const guid = () => {
    return uuidv4();
}