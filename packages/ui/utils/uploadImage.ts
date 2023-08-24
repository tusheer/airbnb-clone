import getImageBlurHash from './getImageBlurHash';

const uploadAsset = async (file: File) => {
    // Create form data for the fetch request
    const formdata = new FormData();

    // Create a URL for the file
    const url = URL.createObjectURL(file);

    // Get the blur hash of the image
    const hashImage = await getImageBlurHash(url);

    // Add the file and blur hash to the form data
    formdata.append('image', file);
    formdata.append('blur_hash', hashImage);

    // Upload the image to the server and return the response
    return await fetch('http://localhost:8000/api/upload/image', {
        method: 'POST',
        body: formdata,
        credentials: 'include',
    }).then((data) => data.json());
};

export default uploadAsset;
